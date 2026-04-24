import { fetchProduct } from "@/services";
import Link from 'next/link';
import NotFound from "./not-found";

export default async function Home() {

	return (
	<div className='flex flex-col justify-center items-center px-10 lg:px-15 py-10 '>
			{/* BODY */}
			{/* <div className="w-full || h-500">Home</div> */}
			<p className="text-[var(--werent-green-2)] text-center text-2xl/6 font-semibold">We Rent, We Return, We Repeat</p>
			<p className="text-gray-700 text-sm text-center mt-2">We're not like other clothing rental subscriptions. We're better.</p>
			
			<Link href='/products' className='bg-[var(--werent-green-1)] text-white px-10 py-2 rounded-3xl hover:opacity-60 mt-2 mb-5'>See All Products</Link>
			
			<div className="flex gap-1 lg:gap-5 h-[50vh] lg:h-[90vh] w-full group">
				<div className="hidden lg:block flex-1 group-hover:flex-1 hover:flex-[2] transition-all duration-700 ease-in-out overflow-hidden">
					<img src='/ML421.jpeg' className="rounded-3xl object-cover h-full w-full object-top"/>
				</div>

				<div className="flex-1 group-hover:flex-1 hover:flex-[2] transition-all duration-700 ease-in-out overflow-hidden">
					<img src='/PBO39.jpeg' className="rounded-3xl object-cover h-full w-full object-top"/>
				</div>

				{/* default besar */}
				<div className="flex-[2] group-hover:flex-1 hover:flex-[2] transition-all duration-700 ease-in-out overflow-hidden">
					<img src='/PBO42.jpeg' className="rounded-3xl object-cover h-full w-full object-top"/>
				</div>

				<div className="flex-1 group-hover:flex-1 hover:flex-[2] transition-all duration-700 ease-in-out overflow-hidden">
					<img src='/SITA3.jpeg' className="rounded-3xl object-cover h-full w-full object-top"/>
				</div>

				<div className="hidden lg:block flex-1 group-hover:flex-1 hover:flex-[2] transition-all duration-700 ease-in-out overflow-hidden">
					<img src='/TT468.jpeg' className="rounded-3xl object-cover h-full w-full object-top"/>
				</div>

			</div>
		</div>
	)
}
