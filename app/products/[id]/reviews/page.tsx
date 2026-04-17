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
									return (
										<div key={item.id} className="bg-white p-5 rounded-md mb-3 mt-3">
											<div>
												<div className='flex justify-between'>
													<div>
														By: {item.reviewerName}
													</div>
													<div className='flex justify-center items-center gap-2'>
														<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
														<path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
														</svg>Helpful {item.numUpvotes} 
													</div>
												</div>
												<div>
													Member Since: 2026
													{item.createdAt ? new Date(item.createdAt).getFullYear() : null}
												</div>
											</div>

											<div className="mb-3 flex flex-col justify-center gap-3 sm:gap-4">
												<hr></hr>
												<div className='flex justify-start items-center gap-2'>
													<Stars rating={item.rating}/>
													<span
													className="text-[1rem] font-semibold leading-none tabular-nums sm:text-[3rem]"
													style={{ color: "var(--werent-green-2)" }}
													>
														{item.rating.toFixed(1)}
													</span>
												</div>
													<p>{item.title}</p>
												<div>
													<p>{item.description}</p>
													<img src={item.attachmentUrl} alt="Review Attachment" className="w-20 object-center object-contain rounded-xl"/>
												</div>
											</div>
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
