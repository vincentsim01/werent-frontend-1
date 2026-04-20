import ReviewCard from "@/components/ReviewCard";
import ReviewSummary from "@/components/ReviewSummary";
import {fetchReviews} from "@/services/index";
import { fetchProduct } from "@/services/index";
import ReviewsInfiniteList from "@/components/ReviewsInfiniteList";
import AddToCartMobile from "@/components/AddToCart_Mobile";
import { Review } from "@/types";
import Link from "next/link";
import { Product } from "@/types";

export default async function AllReviews({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const allreviews = await fetchReviews(Number(id));
	const allreview = allreviews.data;
	const products : Product = await fetchProduct(Number(id))
	const reviews = products.reviews ?? [];

	type MaxReview = {
	value: number;
	index: number;
	review: Review;
	};
	const maxReview = reviews.reduce<MaxReview>(
	(max, review, index) => {
		if (review.numUpvotes > max.value) {
		return { value: review.numUpvotes, index, review };
		}
		return max;
	},
	{ value: -Infinity, index: 0, review: reviews[0] }
	);


	const averageRating = allreview.reduce((acc, item) => acc + item.rating, 0) / allreview.length;
	return (
		<div className="mx-auto w-full xl:w-[1280px] flex flex-col justify-center gap-2 px-10 lg:px-30">
				<div className="flex flex-col gap-3 relative">
					<div className="sticky left-0 top-10 md:top-20 bg-[#f3f3f3] w-full pb-5">
						<div className="py-5">
							<ReviewSummary productId={Number(id)} productRating={products.rating}
							productName={products.name} productBrand={products.brand}
							totalReview={reviews.length} backButton={true}/>
						</div>
						<div className='md:flex md:justify-end md:items-center'>
							<Link href={`/AddReview`} className='bg-[var(--werent-green-2)] rounded-3xl pl-5 pr-5 pt-3 pb-3 text-white md:w-[20%] w-full text-center hover:opacity-60 transition-opacity duration-200'>
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
											reviews={reviews}
											pageSize={reviews.length <= 3  ? 2 : 3}
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