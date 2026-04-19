import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f3f3f3]/90 backdrop-blur-md">
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-werent-green-2/20 blur-xl animate-pulse"></div>

        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-werent-green-2 border-r-werent-green-1 animate-spin"></div>

        {/* Inner reverse spinning ring */}
        <div className="absolute inset-3 rounded-full border-[3px] border-transparent border-b-werent-green-3 border-l-werent-green-2 animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* Center core pulse */}
        <div className="w-6 h-6 rounded-full bg-werent-green-1 shadow-[0_0_15px_var(--werent-green-1)] animate-pulse"></div>
      </div>

      <p className="text-werent-green-1 font-semibold tracking-[0.2em] uppercase text-sm animate-pulse">
        Loading...
      </p>
    </div>
  );
}
