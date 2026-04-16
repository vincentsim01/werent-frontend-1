export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  description: string;
  imageUrls: string[];
  reviews: Review[];
}

export interface Review {
  id: number;
  title: string;
  reviewerName: string;
  productId: number;
  rating: number;
  numUpvotes: number;
  description: string;
  attachmentUrl: string;
}
