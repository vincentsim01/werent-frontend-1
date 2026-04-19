"use client";

import { useState } from "react";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeImages = images ?? [];
  const mainImage = safeImages[activeIndex] ?? safeImages[0] ?? "";
  const desktopTopImages = safeImages.slice(0, 2);
  const desktopBottomImages = safeImages.slice(2, 5);

  if (!safeImages.length) {
    return (
      <div className="w-full p-0">
        <div className="flex min-h-[520px] items-center justify-center bg-transparent text-sm text-neutral-500">
          No images available
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-transparent p-0">
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 gap-3">
          {desktopTopImages.map((imageUrl, index) => (
            <button
              type="button"
              key={`top-${imageUrl}-${index}`}
              onClick={() => setActiveIndex(index)}
              className="overflow-hidden bg-transparent"
            >
              <img
                src={imageUrl}
                alt={`Product image ${index + 1}`}
                className="h-[520px] w-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-4 gap-3">
          {desktopBottomImages.map((imageUrl, index) => {
            const actualIndex = index + 2;

            return (
              <button
                type="button"
                key={`bottom-${imageUrl}-${actualIndex}`}
                onClick={() => setActiveIndex(actualIndex)}
                className="overflow-hidden bg-transparent"
              >
                <img
                  src={imageUrl}
                  alt={`Product image ${actualIndex + 1}`}
                  className="h-[180px] w-full object-cover"
                />
              </button>
            );
          })}
          {desktopBottomImages.length < 4 && (
            <div
              className="h-[180px] w-full bg-transparent"
              aria-hidden="true"
            />
          )}
          {desktopBottomImages.length === 0 && (
            <div className="col-span-4 border border-dashed border-black/10 px-4 py-6 text-sm text-neutral-500">
              Only two images available for this product.
            </div>
          )}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="overflow-hidden bg-transparent">
          <img
            src={mainImage}
            alt="Product image"
            className="h-[420px] w-full object-cover"
          />
        </div>

        <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
          {safeImages.map((imageUrl, index) => (
            <button
              type="button"
              key={`thumb-${imageUrl}-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`relative h-24 w-20 flex-none overflow-hidden ring-1 $
                activeIndex === index ? "ring-black/70" : "ring-black/10"
              }`}
            >
              <img
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}