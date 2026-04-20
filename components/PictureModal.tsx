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
      <div className="relative bg-[#F9F9F9] md:bg-white w-[60%] md:h-auto md:max-w-[500px] md:rounded-[32px] shadow-2xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row">

        {/* Mobile Header (Back Button) */}
        {/* <div className="md:hidden flex items-center p-6 bg-white shrink-0" onClick={onClose}>
          <button onClick={onClose} className="flex items-center gap-2 text-gray-800 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <span className="font-semibold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>See Other Reviews</span>
          </button>
        </div> */}

        {/* Close Button Desktop */}
        <button 
          onClick={onClose}
          className="p-5 cursor-pointer md:block absolute right-1 top-1 md:right-8 md:top-8 z-20 text-gray-400 hover:text-gray-600 transition-colors bg-white hover:bg-white/80 rounded-full p-1 shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="cursor-pointer w-4 h-4md:w-8 md:h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> 

        {/* Left Column: Image Area - Slightly larger for PictureModal */}
        <div className="w-full md:w-[90%] p-4 md:p-12 flex items-center justify-center shrink-0">
          <div className="w-full aspect-[4/5] md:h-full relative overflow-hidden rounded-2xl md:rounded-xl shadow-lg">
          {review.attachmentUrl ?             
            <img 
              src={review.attachmentUrl} 
              alt="Review attachment" 
              className="w-full h-full object-cover cursor-pointer"
            /> :
              <img 
                src="/user.png"
                alt="Review attachment" 
                className="w-full h-full object-cover cursor-pointer"
            />}

          </div>
        </div>

  
      </div>
    </div>
  );
}
