"use client";

import React from "react";
import Stars from "./Stars";

type Review = {
  id: number;
  reviewerName: string;
  rating: number;
  numUpvotes: number;
  title: string;
  description: string;
  attachmentUrl: string;
  createdAt?: string | Date;
  size?: string;
};

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: Review;
}

export default function ReviewModal({ isOpen, onClose, review }: ReviewModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 md:p-4 overflow-y-auto">
      {/* Container */}
      <div className="relative bg-[#F9F9F9] mt-30 md:bg-white w-full h-full md:h-auto md:max-w-[900px] md:rounded-[32px] shadow-2xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row">
        {/* Close Button Desktop */}
        <button 
          onClick={onClose}
          className=" md:block absolute bg-white right-1 top-1 border rounded-full md:right-2 md:top-2 z-20 p-2 md:p-5 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Column (Desktop) / Top Section (Mobile): Image */}
        <div className="  md:w-[55%] md:h-[50%]  p-4 md:p-10 flex items-center justify-center shrink-0">
          <div className="w-[55%] md:w-full md:h-full relative overflow-hidden rounded-2xl md:rounded-lg">
              {review.attachmentUrl ?             
                <img 
                  src={review.attachmentUrl} 
                  alt="Review attachment" 
                  className="w-[100%] h-[40vh] md:h-[60vh] md:w-[90%] object-contain md:object-cover"
                /> :
                  <img 
                    src="/user.png"
                    alt="Review attachment" 
                    className="w-full md:w-[80%] object-cover mt-5 opacity-30"
                />
            }
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 px-6 pb-10 md:py-12 md:pr-12 md:pl-0 flex flex-col justify-center overflow-y-auto">
          
          {/* Card for content on mobile, or just plain on desktop */}
          <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-[24px] md:rounded-none shadow-sm md:shadow-none">
            {/* User Info & Helpful */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#2C2C2C]" style={{ fontFamily: 'Raleway, sans-serif' }}>{review.reviewerName}</h3>
                <p className="text-sm text-[#707070]">Member since {review.createdAt ? new Date(review.createdAt).getFullYear() : '2016'}</p>
              </div>
              <div className="flex items-center gap-1 text-[#2C2C2C] font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
                <span className="text-[14px]">Helpful ({review.numUpvotes})</span>
              </div>
            </div>

            <hr className="mb-4 bg-[#748D74] h-[1px] border-none opacity-40 md:opacity-30" />

            {/* Stars & Size */}
            <div className="mb-4">
              <Stars rating={review.rating} />
              <p className="mt-3 text-[#2C2C2C] font-normal text-sm md:text-base">Size : {review.size || 'XL'}</p>
            </div>

            {/* Review Content */}
            <div className="space-y-2">
              <h4 className="text-xl md:text-2xl font-bold text-[#2C2C2C] leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>{review.title}</h4>
              <p className="text-[#505050] text-sm md:text-base leading-relaxed">
                {review.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}