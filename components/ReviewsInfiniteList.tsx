"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ReviewCard from "@/components/ReviewCard";
import type { ResFetchReviewsByProductId, Review } from "@/types";

const DEFAULT_PAGE_SIZE = 3;
const PREFETCH_BELOW_PX = 160;

type Props = {
  productId: number;
  initialReviews: Review[];
  initialHasNextPage: boolean;
  initialNextCursor: number | null;
  pageSize?: number;
};

export default function ReviewsInfiniteList({
  productId,
  initialReviews,
  initialHasNextPage,
  initialNextCursor,
  pageSize = DEFAULT_PAGE_SIZE,
}: Props) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [hasNextPage, setHasNextPage] = useState(initialHasNextPage);
  const [nextCursor, setNextCursor] = useState<number | null>(initialNextCursor);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);
  const mayLoadMoreRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (loadingRef.current) return;
    if (!hasNextPage) return;
    if (nextCursor === null) return;

    loadingRef.current = true;
    mayLoadMoreRef.current = false;
    setIsLoading(true);
    setLoadError(null);

    try {
      const response = await fetch(
        `/api/products/${productId}/reviews?limit=${pageSize}&cursor=${nextCursor}`,
      );
      if (!response.ok) {
        throw new Error("Failed to load reviews");
      }
      const payload = (await response.json()) as ResFetchReviewsByProductId;

      setReviews((prev) => [...prev, ...payload.data]);
      setHasNextPage(payload.pagination.hasNextPage);
      setNextCursor(payload.pagination.nextCursor);
    } catch {
      setLoadError("Failed to load more reviews. Please try again.");
    } finally {
      setIsLoading(false);
      loadingRef.current = false;
    }
  }, [hasNextPage, nextCursor, pageSize, productId]);

  const tryLoadFromViewport = useCallback(() => {
    if (!mayLoadMoreRef.current) return;
    if (!hasNextPage) return;
    if (nextCursor === null) return;
    if (loadingRef.current) return;

    const node = sentinelRef.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.top > window.innerHeight + PREFETCH_BELOW_PX) return;

    void loadMore();
  }, [hasNextPage, loadMore, nextCursor]);

  useEffect(() => {
    const onScrollIntent = () => {
      mayLoadMoreRef.current = true;
      tryLoadFromViewport();
    };

    window.addEventListener("scroll", onScrollIntent, { passive: true });
    window.addEventListener("wheel", onScrollIntent, { passive: true });
    window.addEventListener("touchmove", onScrollIntent, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollIntent);
      window.removeEventListener("wheel", onScrollIntent);
      window.removeEventListener("touchmove", onScrollIntent);
    };
  }, [tryLoadFromViewport]);

  useEffect(() => {
    if (!hasNextPage) return;
    if (nextCursor === null) return;
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        if (!mayLoadMoreRef.current) return;
        void loadMore();
      },
      { root: null, rootMargin: "240px 0px", threshold: 0 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasNextPage, nextCursor, loadMore]);

  return (
    <>
      <div className="flex flex-col gap-3">
        {reviews.map((item) => (
          <div key={item.id}>
            <ReviewCard Review={item} showPicture={true} />
          </div>
        ))}
      </div>
      {loadError ? (
        <div className="py-4 text-center text-sm text-red-500">{loadError}</div>
      ) : null}
      {hasNextPage ? (
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
              <span>Loading review…</span>
            </>
          ) : (
            <span>Scroll down to load more reviews</span>
          )}
        </div>
      ) : null}
    </>
  );
}