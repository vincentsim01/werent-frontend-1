import { fetchProduct } from "@/services";
import Link from 'next/link';
import NotFound from "./not-found";

export default async function Home() {

	return (
		<div className='flex justify-center items-center'>
			{/* BODY */}
			{/* <div className="w-full || h-500">Home</div> */}
			<Link href='/products' className='bg-[var(--werent-green-1)] text-white p-10 rounded-3xl hover:opacity-60 mt-20 mb-20'>Click Here to See All Products</Link>

		</div>
	);
}
