import ReviewSummary from "@/components/ReviewSummary";
import ReviewsInfiniteList from "@/components/ReviewsInfiniteList";
import { fetchReviews } from "@/services/index";
import { fetchProduct } from "@/services/index";
import AddToCartMobile from "@/components/AddToCart_Mobile";
import Link from "next/link";
import {
  getMockProduct,
  getMockReviews,
} from "@/lib/mockReviewPageData";
import { Product } from "@/types";

const useReviewMocks = process.env.WERENT_MOCK_REVIEWS === "1";

export default async function AllReviews({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);

  const [allreview, products]: [Awaited<ReturnType<typeof fetchReviews>>, Product] =
    useReviewMocks
      ? [getMockReviews(productId), getMockProduct(productId)]
      : await Promise.all([fetchReviews(productId), fetchProduct(productId)]);

  if (allreview.length === 0) {
    return (
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-10 py-10 lg:px-30">
        <Link
          href={`/products/${productId}`}
          className="text-sm underline underline-offset-2 hover:opacity-70"
        >
          Back to product
        </Link>
        <p className="font-size-3">
          No reviews yet for {products.name} by {products.brand}.
        </p>
        <div className="block lg:hidden">
          <AddToCartMobile />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-center gap-2 px-10 lg:px-30">
      <div className="relative flex flex-col gap-2">
        <div className="sticky left-0 top-20 w-full bg-[#f3f3f3] md:top-30">
          <div className="py-5">
            <ReviewSummary
              productId={productId}
              productRating={products.rating}
              productName={products.name}
              productBrand={products.brand}
              totalReview={allreview.length}
              backButton={true}
              Review={allreview[0]}
            />
          </div>
        </div>
        <div>
          <section
            id="product-reviews"
            aria-labelledby="pdp-reviews-heading"
            className="rounded-2xl px-4 py-8 sm:px-6 sm:py-10"
          >
            <h2 id="pdp-reviews-heading" className="sr-only">
              Customer reviews
            </h2>
            <ReviewsInfiniteList
              reviews={allreview}
              pageSize={allreview.length <= 10 ? 2 : 10}
            />
          </section>
        </div>
      </div>
      <div className="block lg:hidden">
        <AddToCartMobile />
      </div>
    </div>
  );
}
