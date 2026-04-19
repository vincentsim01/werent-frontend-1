"use client"

import React, { useState } from 'react'
import Stars from './Stars'
import Link from 'next/link'
import ReviewModal from './ReviewModal'
import {Review} from "@/types"

type ReviewSum = {
  productId : number,
  productRating : number,
  productName : string,
  productBrand : string,
  totalReview : number,
  backButton : boolean,
  Review : Review
}

// type Review = {
//     id : number
//     reviewerName : string,
//     rating : number,
//     numUpvotes: number,
//     title: string,
//     description: string,
//     attachmentUrl :string,
//     createdAt? : Date
// }

type ReviewProps = {
    Review? : Review,
    showPicture? : boolean
}

function ReviewSummary({productId, productRating, productName, productBrand, totalReview, backButton, Review}:ReviewSum) {

  const [isReviewOpen, setIsReviewOpen] = useState(false);

	const normalizedReview = {
		...Review,
        createdAt: Review.createdAt
            ? new Date(Review.createdAt).toISOString()
            : undefined,
	};
  return (
    <div>
      <ReviewModal isOpen={isReviewOpen} onClose={() => setIsReviewOpen(false)} review={normalizedReview as any} />
        <div className='flex items-center'>
          <Link href={`/products/${productId}`} className={`${backButton ? 'block' : 'hidden'} flex items-center cursor-pointer`}>
            <svg className='size-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

            <p className='font-size-1'>Reviews</p>

          </Link>
          
          <p className={`font-size-1 ${backButton ? 'hidden' : 'block'}`}>Reviews</p>
        </div>
        

        <section className='flex gap-2 items-center cursor-pointer' onClick={() => setIsReviewOpen(true)}>
            <p className='font-size-3 cursor-pointer' onClick={() => setIsReviewOpen(true)}>{productRating}</p>
            <div className='flex cursor-pointer' onClick={() => setIsReviewOpen(true)}>
                <Stars rating={productRating}/>
            </div>
        </section>
        <p onClick={() => setIsReviewOpen(true)}>{totalReview} Reviews for {productName} by {productBrand}</p>
    </div>
  )
}

export default ReviewSummary