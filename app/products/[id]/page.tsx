import ProductSection from "@/components/ProductSection";
import ReviewSection from "@/components/ReviewSection";
import { fetchProduct } from "@/services";
import { Product } from "@/types";
import AddToCartMobile from "@/components/AddToCart_Mobile";

export default async function ProductDetailPage({params,}: {
  params: Promise<{ id: string }>;}) {
	const { id } = await params;
	const productId = Number(id);

	const products : Product = await fetchProduct(productId)

	if (isNaN(productId)) {
		return 
		<div>Product Id Not Found</div>
	}
	return (
		<div className="mx-auto w-full xl:w-[1280px] flex flex-col justify-center gap-2 px-10 lg:px-30">
			{/* ^^^ div to be deleted */}
			<div className="w-full">
				<ProductSection productId={productId}/>
			</div>
			<div className="w-full">
				<ReviewSection productId={products.id} productRating={products.rating}
				productName={products.name} productBrand={products.brand}/>
			</div>
			<div className="block lg:hidden">
				<AddToCartMobile />
			</div>
		</div>
	);
}
