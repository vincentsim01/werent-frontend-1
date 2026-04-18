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

interface PictureModalProps {
  isOpen: boolean;
  onClose: () => void;
  review: Review;
}

export default function PictureModal({ isOpen, onClose, review }: PictureModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-0 md:p-4 overflow-y-auto">
      {/* Container */}
      <div className="relative bg-[#F9F9F9] md:bg-white w-full h-full md:h-auto md:max-w-[1050px] md:rounded-[32px] shadow-2xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row">

        {/* Mobile Header (Back Button) */}
        <div className="md:hidden flex items-center p-6 bg-white shrink-0" onClick={onClose}>
          <button onClick={onClose} className="flex items-center gap-2 text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="font-semibold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>See Other Reviews</span>
          </button>
        </div>

        {/* Close Button Desktop */}
        <button 
          onClick={onClose}
          className="hidden p-5 cursor-pointer md:block absolute right-8 top-8 z-20 text-gray-400 hover:text-gray-600 transition-colors bg-white/50 hover:bg-white rounded-full p-1 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> 

        {/* Left Column: Image Area - Slightly larger for PictureModal */}
        <div className="w-full md:w-[90%] bg-[#f0f0f0] p-4 md:p-12 flex items-center justify-center shrink-0">
          <div className="w-full aspect-[4/5] md:h-full relative overflow-hidden rounded-2xl md:rounded-xl shadow-lg">
            <img 
              src={review.attachmentUrl} 
              alt="Review attachment" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Review Details Content */}
        {/* <div className="flex-1 px-6 pb-12 md:py-16 md:pr-16 md:pl-0 flex flex-col justify-center"> */}
          
          {/* <div className="bg-white md:bg-transparent p-8 md:p-0 rounded-[28px] md:rounded-none shadow-sm md:shadow-none"> */}
            {/* User Info & Helpful */}
            {/* <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#2C2C2C]" style={{ fontFamily: 'Raleway, sans-serif' }}>{review.reviewerName}</h3>
                <p className="text-[#808080] text-sm md:text-base">Member since {review.createdAt ? new Date(review.createdAt).getFullYear() : '2016'}</p>
              </div>
              <div className="flex items-center gap-1.5 text-[#2C2C2C] font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                </svg>
                <span className="text-[15px]">Helpful ({review.numUpvotes})</span>
              </div>
            </div> */}
                

            {/* <hr className="mb-5 bg-[#748D74] h-[1.5px] border-none opacity-40" /> */}

            {/* Stars & Size */}
            {/* <div className="mb-6">
              <Stars rating={review.rating} />
              <p className="mt-4 text-[#2C2C2C] font-semibold text-base md:text-lg tracking-tight">Size : {review.size || 'XL'}</p>
            </div> */}

            {/* Review Content */}
            {/* <div className="space-y-4">
              <h4 className="text-2xl md:text-3xl font-extrabold text-[#2C2C2C] tracking-tight leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>{review.title}</h4>
              <p className="text-[#555555] text-base md:text-lg leading-relaxed">
                {review.description}
              </p>
            </div> */}
          {/* </div> */}

        {/* </div> */}
      </div>
    </div>
  );
}
