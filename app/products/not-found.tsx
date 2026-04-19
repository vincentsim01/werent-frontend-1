import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[75vh] flex items-center justify-center">
      <div className=" lg:w-[50%] flex flex-col items-center gap-2 justify-center">
        <img src='/software.gif' className="w-50"/>
        
        <div className="text-center">
            <p className="font-bold text-2xl">WE'RE SORRY!</p>
            <p>The page you are looking for is under maintenance.</p>
            <p>Please try again later.</p>
        </div>

        <Link href={`/products`} className='bg-[var(--werent-green-2)] rounded-3xl py-2 px-6 text-white text-center hover:opacity-60 transition-opacity duration-200'>
			See All Products
	    </Link>
      </div>
    </main>
  );
}