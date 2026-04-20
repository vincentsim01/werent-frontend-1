import Link from "next/link"
export default function AddToCartMobile() {

	return (
		<div className="w-full fixed bottom-0 left-0 outline-2 outline-werent-green-1 bg-werent-green-1 || text-white text-center h-12">
			<div className="flex items-center justify-center h-full">
				<div className="flex justify-center items-center w-[90%]">
					<div className="mr-2 cursor-pointer hover:opacity-60">
						<Link href="/cart">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
							</svg>
						</Link>
					</div>
						<Link href="/cart">
							<div className="text-lg font-medium cursor-pointer hover:opacity-60">Add to Cart</div>
						</Link>

				</div>

				<div className="ml-2 text-sm w-[10%] bg-werent-green-2 h-full flex items-center justify-center rounded-sm cursor-pointer hover:opacity-60 transition-colors">
					<Link href="/favourite">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white ">
						<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
						</svg>
					</Link>
				</div>
			</div>

		</div>
	);
}
