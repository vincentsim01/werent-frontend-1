"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import type { Review } from "@/types";

const DEFAULT_PAGE_SIZE = 8;
const PREFETCH_BELOW_PX = 160;
/**
 * Jeda minimum saat "memuat" agar indikator terlihat.
 * Setelah ada fetch API sungguhan, ganti dengan durasi request (tetap pakai isLoading).
 */
const MIN_LOADING_MS = 450;

type Props = {
  reviews: Review[];
  pageSize?: number;
};

export default function ReviewsInfiniteList({
  reviews,
  pageSize = DEFAULT_PAGE_SIZE,
}: Props) {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(pageSize, reviews.length),
  );
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const visibleCountRef = useRef(visibleCount);
  const reviewsLengthRef = useRef(reviews.length);
  const loadingRef = useRef(false);
  /**
   * Setelah satu batch selesai, tunggu gestur scroll/wheel lagi
   * supaya tidak memuat semua review dalam satu rangkaian observer.
   */
  const mayLoadMore = useRef(false);

  useEffect(() => {
    visibleCountRef.current = visibleCount;
  }, [visibleCount]);

  useEffect(() => {
    reviewsLengthRef.current = reviews.length;
  }, [reviews.length]);

  const hasMore = visibleCount < reviews.length;

  const tryLoadMore = useCallback(async () => {
    if (loadingRef.current) return;
    if (visibleCountRef.current >= reviewsLengthRef.current) return;

    loadingRef.current = true;
    mayLoadMore.current = false;
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, MIN_LOADING_MS));

    setVisibleCount((c) => Math.min(c + pageSize, reviewsLengthRef.current));
    setIsLoading(false);
    loadingRef.current = false;
  }, [pageSize]);

  useEffect(() => {
    let raf = 0;

    const considerLoad = () => {
      if (loadingRef.current) return;
      if (visibleCountRef.current >= reviewsLengthRef.current) return;
      if (!mayLoadMore.current) return;

      const node = sentinelRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      if (rect.top > window.innerHeight + PREFETCH_BELOW_PX) return;

      void tryLoadMore();
    };

    const onScrollLike = () => {
      mayLoadMore.current = true;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(considerLoad);
    };

    window.addEventListener("scroll", onScrollLike, { passive: true });
    window.addEventListener("wheel", onScrollLike, { passive: true });
    window.addEventListener("touchmove", onScrollLike, { passive: true });
    window.addEventListener("resize", onScrollLike, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollLike);
      window.removeEventListener("wheel", onScrollLike);
      window.removeEventListener("touchmove", onScrollLike);
      window.removeEventListener("resize", onScrollLike);
    };
  }, [tryLoadMore]);

  const visible = reviews.slice(0, visibleCount);

  return (
    <>
      <div className="flex flex-col gap-3">
        {visible.map((item) => (
          <div key={item.id}>
            <ReviewCard Review={item} showPicture={true} />
          </div>
        ))}
      </div>
      {hasMore ? (
        <div
          ref={sentinelRef}
          className="flex min-h-14 flex-col items-center justify-center gap-2 py-6 text-sm text-neutral-500"
          aria-busy={isLoading}
          aria-live="polite"
        >
          {isLoading ? (
            <>
              <span
                className="inline-block size-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600"
                aria-hidden
              />
              <span>Memuat review…</span>
            </>
          ) : (
            <span>Gulir ke bawah untuk memuat lebih banyak</span>
          )}
        </div>
      ) : null}
    </>
  );
}