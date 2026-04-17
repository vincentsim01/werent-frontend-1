import ReviewCard from "@/components/ReviewCard";
import ReviewSummary from "@/components/ReviewSummary";
import {fetchReviews} from "@/services/index";
import { fetchProduct } from "@/services/index";
import Link from "next/link";
import Stars from "@/components/Stars";

export default async function AllReviews({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const allreview = await fetchReviews(Number(id));
	const averageRating = allreview.reduce((acc, item) => acc + item.rating, 0) / allreview.length;
	const productName = await fetchProduct(Number(id)).then((product) => product.name);
	return (
		<div>
			<div className="mx-auto w-full xl:w-[1280px] flex flex-col justify-center gap-2">
				<Link href={`/products/${id}`} >			
					<div className='cursor-pointer flex items-center gap-2 text-[var(--werent-green-2)] mb-5'>
						<span >
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
							</svg>
						</span>
						<span className="text-lg">Back to Product</span>
					</div>
				</Link>
				<div className="flex flex-col gap-2">
					<div className="top-10 pl-8">
						<div className='flex justify-start items-center gap-2'>
							{averageRating.toFixed(1)}<Stars rating={averageRating}/>
						</div>
						<p>{allreview.length} reviews for {productName}</p>
						{/* ^^^ top-12 must adjust with the height of the header */}
						{/* <ReviewSummary /> */}
					</div>
					<div className="flex flex-col gap-2">
						{/* MAP ReviewCard */}
						<section
								id="product-reviews"
								aria-labelledby="pdp-reviews-heading"
								className="rounded-2xl px-4 py-8 sm:px-6 sm:py-10"
								>
									<h2
										id="pdp-reviews-heading"
										className="mb-6 text-[1.75rem] font-bold leading-tight tracking-tight sm:text-[2rem]"
										style={{ color: "var(--werent-figma-text)" }}
									>
										Reviews
									</h2>
									{allreview.map((item) => {
										return(
											<div key={item.id}>
												<ReviewCard reviews={item}/>
											</div>
										)
									})}
							</section>
					</div>
				</div>
			</div>
		</div>
	);
}
