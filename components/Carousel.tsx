"use client";

import { useEffect, useRef, useState } from "react";
import PictureModalProduct from "./PictureModalProduct";

type CarouselProps = {
  images: string[];
};

export default function Carousel({ images }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPictureOpen, setIsPictureOpen] = useState(false);
  const thumbnailButtonsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const safeImages = images ?? [];
  const mobileImages = safeImages;
  const desktopTopImages = safeImages.slice(0, 2);
  const desktopBottomImages = safeImages.slice(2, 5);

  useEffect(() => {
    if (!mobileImages.length) return;

    if (activeIndex < 0 || activeIndex >= mobileImages.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, mobileImages.length]);

  useEffect(() => {
    const activeThumb = thumbnailButtonsRef.current[activeIndex];
    if (!activeThumb) return;

    activeThumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const openPicture = (index: number) => {
    setActiveIndex(index);
    setIsPictureOpen(true);
  };

  const goToPreviousImage = () => {
    if (!safeImages.length) return;

    setActiveIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const goToNextImage = () => {
    if (!safeImages.length) return;

    setActiveIndex((prev) =>
      prev === safeImages.length - 1 ? safeImages.length - 1 : prev + 1,
    );
  };

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
      <PictureModalProduct
        isOpen={isPictureOpen}
        images={safeImages}
        activeIndex={activeIndex}
        imageAlt="Product image preview"
        onClose={() => setIsPictureOpen(false)}
        onPrevious={goToPreviousImage}
        onNext={goToNextImage}
      />

      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-3">
          {desktopTopImages.map((imageUrl, index) => (
            <button
              type="button"
              key={`top-${imageUrl}-${index}`}
              onClick={() => {
                openPicture(index);
              }}
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
                onClick={() => {
                  openPicture(actualIndex);
                }}
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

      <div className="md:hidden">
        <div className="overflow-hidden bg-[#f3f3f3]">
          <img
            src={mobileImages[activeIndex]}
            alt={`Product image ${activeIndex + 1}`}
            className="h-[420px] w-full object-contain"
          />
        </div>

        <div className="mt-3 flex snap-x gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {mobileImages.map((imageUrl, index) => (
            <button
              type="button"
              key={`mobile-thumb-${imageUrl}-${index}`}
              ref={(element) => {
                thumbnailButtonsRef.current[index] = element;
              }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-[110px] w-[86px] flex-none snap-start overflow-hidden border transition-all ${
                activeIndex === index
                  ? "border-black"
                  : "border-black/10 opacity-80"
              }`}
            >
              <img
                src={imageUrl}
                alt={`Thumbnail image ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
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