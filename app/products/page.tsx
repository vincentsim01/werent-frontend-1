import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
	return (
		<div className="mx-auto w-full xl:w-[1280px] flex flex-col justify-center gap-2">
			<div className="|| w-full text-2xl font-bold">
				This is a Product list Page (string to delete)
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
					{/* MAP ProductCard */}
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</div>
			{/* ^^^ div to be deleted */}
		</div>
	);
}
