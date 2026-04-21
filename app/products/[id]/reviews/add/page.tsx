"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { createReview } from "@/services/index";

export default function AddReviewPage() {
  const router = useRouter();
  const params = useParams();
  const productId = Number(params.id);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    reviewerName: "",
    rating: 5,
    description: "",
    attachmentUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await createReview({
        id: 0, // Backend might override this
        productId,
        numUpvotes: 0,
        createdAt: new Date(),
        ...formData,
      });

      // Redirect back to all reviews upon success
      router.push(`/products/${productId}/reviews`);
    } catch (error) {
      console.error("Error creating review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full xl:w-[1280px] p-10 lg:px-30 bg-[#f3f3f3] min-h-screen flex justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-fit mt-10">
        <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2 font-display">
          Write a Review
        </h1>
        <p className="text-gray-500 mb-8 font-light">
          Share your experience with this product.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Reviewer Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="reviewerName">
              Your Name
            </label>
            <input
              type="text"
              id="reviewerName"
              name="reviewerName"
              required
              value={formData.reviewerName}
              onChange={handleChange}
              placeholder="e.g. Suci Splendid"
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--werent-green-2)] focus:border-transparent transition-all bg-gray-50/50"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="title">
              Review Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. High Quality"
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--werent-green-2)] focus:border-transparent transition-all bg-gray-50/50"
            />
          </div>

          {/* Rating */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="rating">
              Rating (1-5)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                id="rating"
                name="rating"
                min="1"
                max="5"
                step="1"
                value={formData.rating}
                onChange={handleChange}
                className="w-full accent-[var(--werent-green-2)]"
              />
              <span className="font-bold text-lg text-[var(--werent-green-2)] bg-green-50 px-3 py-1 rounded-lg">
                {formData.rating}
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us what you liked or disliked..."
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--werent-green-2)] focus:border-transparent transition-all resize-none bg-gray-50/50"
            />
          </div>

          {/* Attachment URL */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700" htmlFor="attachmentUrl">
              Photo URL (Optional)
            </label>
            <input
              type="url"
              id="attachmentUrl"
              name="attachmentUrl"
              value={formData.attachmentUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--werent-green-2)] focus:border-transparent transition-all bg-gray-50/50"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 py-3 px-4 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 py-3 px-4 rounded-xl bg-[var(--werent-green-2)] text-white font-semibold shadow-lg shadow-green-900/20 hover:opacity-90 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                "Submit Review"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
