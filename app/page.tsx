import { fetchProduct } from "@/services";

export default async function Home() {
	const product = await fetchProduct(2);

	return (
		<div>
			{/* BODY */}
			<div className="w-full || h-500">Home</div>
			<div className="text-5xl font-bold">{product.name}</div>
		</div>
	);
}
