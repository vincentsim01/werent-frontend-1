import { fetchProduct } from "@/services";
import Link from 'next/link';

export default async function Home() {
	const product = await fetchProduct(2);

	return (
		<div className='flex justify-center items-center'>
			{/* BODY */}
			{/* <div className="w-full || h-500">Home</div> */}
			<Link href='/products' className='bg-[var(--werent-green-1)] text-white p-10 rounded-3xl hover:opacity-60'>Click Here to See All Products</Link>

		</div>
	);
}
