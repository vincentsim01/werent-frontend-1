import { fetchProduct, fetchReviews } from "@/services";
import SizeSelector from "./SizeSelector";
import Stars from "./Stars";

export default async function ProductContent({ id } : { id: number}) {
	const product = await fetchProduct(id);
	const formattedPrice = new Intl.NumberFormat("id-ID").format(product.price);
	const allreview = await fetchReviews(Number(id));
	const averageRating = allreview.reduce((acc, item) => acc + item.rating, 0) / allreview.length;

	return (
		<div>
			<div className="w-full h-140 outline-2 outline-red-400 p-4">
				<div className="flex flex-col space-y-4">
					<h1 
						className="text-[var(--werent-green-1)]"
						style= {{ fontSize: "var(--werent-font-1)" }}
					>
						{product.name}
					</h1>
					<h3 
						className="text-[var(--werent-green-1)]"
						style= {{ fontSize: "var(--werent-font-3)" }}
					>
						{product.brand}
					</h3>
					<h3
						className="text-[var(--werent-green-1)] font-medium"
						style= {{ fontSize: "var(--werent-font-2)" }}
					>
						Rp {formattedPrice}
					</h3>
					<Stars rating={averageRating}/>
					<h4 className="text-[var(--werent-green-1)] font-medium">
						Size
					</h4>
					<SizeSelector />
				</div>
				<div className="flex items-center justify-center hidden sm:flex mt-5 mb-5 gap-3">
					<button 
						className="border rounded-full border-[var(--werent-green-1)] bg-[var(--werent-green-1)] hover:opacity-60 text-white h-7 px-3 
						cursor-pointer text-[10px] sm:text-[11px] w-1/2 transition-opacity hover:opacity-60"
						style={{ 
							backgroundColor: "var(--werent-green-1)",
							fontSize: "var(--werent-font-4)" 
						}}
					>
						Add to Bag
					</button>
					<button 
						className="wr-icon-btn w-9 h-9 items-center justify-center transition-opacity hover:opacity-60 hidden sm:flex cursor-pointer" 
						aria-label="wishlist"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
							<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 
							2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 
							7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" 
						/>
						</svg>
					</button>
				</div>
				<div className="w-full h-px bg-[var(--werent-green-1)] my-4" />
				<h3 className="text-[var(--werent-green-1)] font-medium mb-3">
					Description
				</h3>
				<h4 className="text-[var(--werent-green-1)]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, 
					nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. 
					Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
				</h4>
			</div>
		</div>
	);
}
