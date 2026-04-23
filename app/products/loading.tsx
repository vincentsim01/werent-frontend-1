import React from 'react';

export default function Loading() {
  return (
    <main className="bg-[var(--parchment)] min-h-screen px-3 py-4 sm:px-6 sm:py-8">
      <p className="font-bold text-[var(--werent-green-1)] font-size-1 text-center pb-5 animate-pulse">All Products</p>
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 animate-pulse">
     
    {Array.from({ length: 8 }).map((_, i) => (
         <div key={i} className="bg-white animate-pulse border border-zinc-300 overflow-hidden rounded transition-transform duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[3/4] bg-[var(--parchment)] overflow-hidden">
                    <div className='bg-[var(--werent-green-1)]w-full h-full opacity-60 animate-pulse m-1'>
                    </div>
                </div>
                <div className="px-3.5 pt-3.5 pb-4">
                  <h3 className="text-[15px] font-medium text-[var(--werent-green-1)] mb-2.5 leading-snug truncate animate-pulse bg-[var(--werent-green-1)] rounded w-32 h-4">Placeholder</h3>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
                        <div className="flex items-baseline gap-1">
                          <span
                            className="text-[13px] font-medium animate-pulse bg-[var(--werent-green-1)] rounded w-16 h-4"
                            style={{ color: "var(--ink)" }}
                          >
                            
                          </span>
                        </div>
                      <button
                        className="w-full sm:w-auto text-center bg-[var(--werent-green-1)] hover:opacity-60 text-white text-[11px] 
                                    rounded uppercase px-3.5 py-1.5 transition-colors duration-200 whitespace-nowrap cursor-pointer"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        Rent
                      </button>
                    </div>
                </div>
        </div>
    ))}

      </div>
    </main>
  );
}