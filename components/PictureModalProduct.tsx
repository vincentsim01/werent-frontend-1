"use client";

import { useEffect } from "react";

type PictureModalProductProps = {
  isOpen: boolean;
  images: string[];
  activeIndex: number;
  imageAlt?: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function PictureModalProduct({
  isOpen,
  images,
  activeIndex,
  imageAlt,
  onClose,
  onPrevious,
  onNext,
}: PictureModalProductProps) {
  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;
  const canGoPrevious = activeIndex > 0;
  const canGoNext = activeIndex < images.length - 1;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (!hasMultipleImages) return;

      if (event.key === "ArrowLeft" && canGoPrevious) {
        onPrevious();
      }

      if (event.key === "ArrowRight" && canGoNext) {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    canGoNext,
    canGoPrevious,
    hasMultipleImages,
    isOpen,
    onClose,
    onNext,
    onPrevious,
  ]);

  if (!isOpen || !activeImage) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex justify-center bg-black/80 px-2 pb-3 pt-14 md:px-4 md:pb-4 md:pt-6"
      role="dialog"
      aria-modal="true"
      aria-label="Product image preview"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close image modal"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="flex max-h-[calc(100vh-4.5rem)] max-w-[95vw] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        {hasMultipleImages && (
          <button
            type="button"
            aria-label="Previous image"
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className="absolute left-3 rounded-full bg-white/90 p-2 text-black disabled:cursor-not-allowed disabled:opacity-40 md:left-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}

        <img
          src={activeImage}
          alt={imageAlt ?? "Product image"}
          className="h-auto max-h-[calc(100vh-5rem)] w-auto max-w-[95vw] object-contain"
        />

        {hasMultipleImages && (
          <button
            type="button"
            aria-label="Next image"
            onClick={onNext}
            disabled={!canGoNext}
            className="absolute right-3 rounded-full bg-white/90 p-2 text-black disabled:cursor-not-allowed disabled:opacity-40 md:right-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5L15.75 12l-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>

      {hasMultipleImages && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
          {activeIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
