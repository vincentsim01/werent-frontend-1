import type { Product, Review } from "@/types";

/** Jumlah review sintetis untuk menguji infinite scroll secara lokal. */
const MOCK_REVIEW_COUNT = 42;

export function getMockProduct(productId: number): Product {
  return {
    id: productId,
    name: "Pearl Floral Tie Sleeve Gown",
    brand: "Sachin & Babi",
    price: 125,
    rating: 4.7,
    description: "Data produk mock untuk pengujian lokal tanpa backend.",
    imageUrls: [],
    reviews: [],
  };
}

export function getMockReviews(productId: number): Review[] {
  return Array.from({ length: MOCK_REVIEW_COUNT }, (_, i) => {
    const n = i + 1;
    const hasImage = n % 5 === 0;
    return {
      id: 900000 + n,
      title: `Uji infinite scroll #${n}`,
      reviewerName: `Penguji ${n}`,
      productId,
      rating: ((n - 1) % 5) + 1,
      numUpvotes: (n * 7) % 48,
      description:
        "Ini teks review mock. Scroll ke bawah untuk memuat batch berikutnya. " +
        "Tanpa backend, data ini hanya muncul jika WERENT_MOCK_REVIEWS=1.",
      attachmentUrl: hasImage ? "https://placehold.co/120x120/e8e8e8/333?text=Photo" : "",
      createdAt: new Date(2024, 2, (n % 28) + 1),
    };
  });
}
