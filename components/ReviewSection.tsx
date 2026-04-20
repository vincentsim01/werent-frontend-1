import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";
import {fetchReviews, fetchProduct} from "../services/index"
import { Review } from "@/types";
import Link from "next/link";

export default async function ReviewSection(props:{productId:number, productRating:number,
	productName:string, productBrand:string}) {
  	const ReviewRaw = await fetchReviews(props.productId);
  	const Review = ReviewRaw.data;
	const Product = await fetchProduct(props.productId);
	const reviews = Product.reviews ?? [];
	if (reviews.length === 0) {
		return (
			<div className='mt-2 mb-2 p-2 h-[200px]'>
				<h2 className="text-2xl font-bold text-[#2C2C2C]">No Reviews Yet</h2>
				<p className="text-[#505050]">Be the first to review this product!</p>
				<br></br>
					<div className='md:flex md:justify-start md:items-center'>
						<Link href={`/AddReview`} className='bg-[var(--werent-green-2)] rounded-3xl pl-5 pr-5 pt-3 pb-3 text-white md:w-[20%] w-full text-center hover:opacity-60 transition-opacity duration-200'>
							Add Review
						</Link>
					</div>
			</div>
		);
	}

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

	const bestReview : Review | null = Review.length
								? Review.reduce((prev, current)=> current.numUpvotes > prev.numUpvotes ? current : prev)
								: null
	return (
		<div>
			<div className="w-full mb-5|| p-2">
				<div className="flex flex-col gap-2 mb-15">
					<ReviewSummary productId={props.productId} productRating={props.productRating}
					productName={props.productName} productBrand={props.productBrand}
					totalReview={reviews.length} backButton={false} />

					{bestReview && <ReviewCard Review ={bestReview} showPicture={true}/>}
					<br></br>
					<div className='flex justify-start items-center'>
						<Link href={`/products/${props.productId}/reviews`} className='bg-[var(--werent-green-2)] rounded-3xl pl-5 pr-5 pt-3 pb-3 text-white md:w-[20%] w-full text-center hover:opacity-60 transition-opacity duration-200'>
							Browse All Reviews
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
