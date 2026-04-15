import ProductSection from "@/components/ProductSection";
import ReviewSection from "@/components/ReviewSection";

export default function ProductDetailPage() {
	return (
		<div className="mx-auto w-full xl:w-[1280px] flex flex-col justify-center gap-2">
			<div className="|| w-full text-2xl font-bold">
				This is a products Detail Page (string to delete)
			</div>
			{/* ^^^ div to be deleted */}
			<div className="w-full">
				<ProductSection />
			</div>
			<div className="w-full">
				<ReviewSection />
			</div>
		</div>
	);
}
