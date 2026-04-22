import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";
import { fetchReviews } from "../services/index";
import Link from "next/link";

export default async function ReviewSection(props: {
  productId: number;
  productRating: number;
  productName: string;
  productBrand: string;
}) {
  const reviewData = await fetchReviews(props.productId);
  const reviews = Array.isArray(reviewData) ? reviewData : [];

  if (reviews.length === 0) {
    return <div>No reviews yet. Be the first to review this product!</div>;
  }

  return (
    <div>
      <div className="w-full mb-5|| p-2">
        <div className="flex flex-col gap-2 mb-15">
          <ReviewSummary
            productId={props.productId}
            productRating={props.productRating}
            productName={props.productName}
            productBrand={props.productBrand}
            Review={reviews[0]}
            totalReview={reviews.length}
            backButton={false}
          />
          <div className="flex justify-start items-center">
            <Link
              href={`/products/${props.productId}/reviews`}
              className="bg-[var(--werent-green-2)] rounded-3xl pl-5 pr-5 pt-3 pb-3 text-white md:w-[20%] w-full text-center hover:opacity-60 transition-opacity duration-200"
            >
              Browse All Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
