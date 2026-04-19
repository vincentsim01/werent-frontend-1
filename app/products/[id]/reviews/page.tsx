import ReviewCard from "@/components/ReviewCard";
import ReviewSummary from "@/components/ReviewSummary";
import { fetchReviews } from "@/services/index";
import { fetchProduct } from "@/services/index";
import Link from "next/link";
import Stars from "@/components/Stars";
import AddToCartMobile from "@/components/AddToCart_Mobile";
import { Product } from "@/types";

export default async function AllReviews({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const allreviewRaw = await fetchReviews(Number(id));
  const allreview = allreviewRaw.data;
  const products: Product = await fetchProduct(Number(id));

  const averageRating =
    allreview.reduce((acc, item) => acc + item.rating, 0) / allreview.length;
  return (
    <div className="mx-auto w-full xl:w-[1280px] flex flex-col justify-center gap-2 px-10 lg:px-30">
      <div className="flex flex-col gap-2 relative">
        <div className="sticky left-0 top-10 md:top-20 bg-[#f3f3f3] w-full">
          <div className="py-5">
            <ReviewSummary
              productId={Number(id)}
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
            <div className="flex flex-col gap-3">
              {allreview.map((item) => {
                return (
                  <div key={item.id}>
                    <ReviewCard Review={item} showPicture={true} />
                  </div>
                );
              })}
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
