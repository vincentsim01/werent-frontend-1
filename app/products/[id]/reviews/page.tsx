import ReviewSummary from "@/components/ReviewSummary";
import { fetchReviews } from "@/services/index";
import { fetchProduct } from "@/services/index";
import ReviewsInfiniteList from "@/components/ReviewsInfiniteList";
import AddToCartMobile from "@/components/AddToCart_Mobile";
import Link from "next/link";
import { Product } from "@/types";

const REVIEWS_PAGE_SIZE = 3;

export default async function AllReviews({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productId = Number(id);
  const [initialReviewsResponse, products]: [Awaited<ReturnType<typeof fetchReviews>>, Product] =
    await Promise.all([
      fetchReviews(productId, { limit: REVIEWS_PAGE_SIZE }),
      fetchProduct(productId),
    ]);
  const initialReviews = initialReviewsResponse.data;
  const totalReviews = products.reviews?.length ?? initialReviews.length;

  if (initialReviews.length === 0) {
    return (
      <div className="mx-auto mb-5 flex w-full flex-col justify-center gap-2 px-10 lg:px-30 xl:w-[1280px]">
        <h2 className="text-2xl font-bold text-[#2C2C2C]">No Reviews Yet</h2>
        <p className="text-[#505050]">Be the first to review this product!</p>
        <div className="md:flex md:items-center md:justify-start">
          <Link
            href={`/products/${id}/reviews/add`}
            className="w-full rounded-3xl bg-[var(--werent-green-2)] pl-5 pr-5 pt-3 pb-3 text-center text-white transition-opacity duration-200 hover:opacity-60 md:w-[20%]"
          >
            Add Review
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center gap-2 px-10 lg:px-30 xl:w-[1280px]">
      <div className="relative flex flex-col gap-3">
        <div className="sticky left-0 top-10 z-50 w-full bg-[#f3f3f3] pb-5 md:top-20">
          <div className="py-5">
            <ReviewSummary
              productId={productId}
              productRating={products.rating}
              productName={products.name}
              productBrand={products.brand}
              totalReview={totalReviews}
              backButton={true}
            />
          </div>
          <div className="md:flex md:items-center md:justify-end">
            <Link
              href={`/products/${id}/reviews/add`}
              className="w-full rounded-3xl bg-[var(--werent-green-2)] pl-5 pr-5 pt-3 pb-3 text-center text-white transition-opacity duration-200 hover:opacity-60 md:w-[20%]"
            >
              Add Review
            </Link>
          </div>
        </div>

        <div>
          <section
            id="product-reviews"
            aria-labelledby="pdp-reviews-heading"
            className="rounded-2xl px-4 py-8 sm:px-6 sm:py-10"
          >
            <div className="flex flex-col gap-3">
              <ReviewsInfiniteList
                productId={productId}
                initialReviews={initialReviews}
                initialHasNextPage={initialReviewsResponse.pagination.hasNextPage}
                initialNextCursor={initialReviewsResponse.pagination.nextCursor}
                pageSize={REVIEWS_PAGE_SIZE}
              />
            </div>
          </section>
        </div>
      </div>
      <div className="block lg:hidden">
        <AddToCartMobile />
      </div>
    </div>
  );
}