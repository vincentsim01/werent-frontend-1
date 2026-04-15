import { Product, Review } from "@/types";

const BASE_URL = "http://localhost:4000"; //Change to deployed BASE_URL later

export const fetchProducts = async (): Promise<Product[]> => {
	try {
		const response = await fetch(`${BASE_URL}/products`);
		if (!response.ok) {
			throw new Error("Failed to fetch products");
		}

		return response.json();
	} catch (error) {
		console.error("Error fetching products:", error);
		throw new Error("Failed to fetch products");
	}
};

export const fetchProduct = async (id: number): Promise<Product> => {
	try {
		const response = await fetch(`${BASE_URL}/products/${id}`);
		if (!response.ok) {
			throw new Error("Failed to fetch product");
		}

		return response.json();
	} catch (error) {
		console.error("Error fetching product:", error);
		throw new Error("Failed to fetch product");
	}
};

export const fetchReviews = async (productId: number): Promise<Review[]> => {
	try {
		const response = await fetch(`${BASE_URL}/products/${productId}/reviews`);
		if (!response.ok) {
			throw new Error("Failed to fetch reviews");
		}

		return response.json();
	} catch (error) {
		console.error("Error fetching reviews:", error);
		throw new Error("Failed to fetch reviews");
	}
};

export const fetchReview = async (id: number): Promise<Review> => {
	try {
		const response = await fetch(`${BASE_URL}/reviews/${id}`);
		if (!response.ok) {
			throw new Error("Failed to fetch review");
		}

		return response.json();
	} catch (error) {
		console.error("Error fetching review:", error);
		throw new Error("Failed to fetch review");
	}
};

// EXTRA MILES =========================
export const createReview = async (review: Review): Promise<Review> => {
	try {
		const response = await fetch(`${BASE_URL}/reviews`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(review),
		});

		if (!response.ok) {
			throw new Error("Failed to create review");
		}

		return response.json();
	} catch (error) {
		console.error("Error creating review:", error);
		throw new Error("Failed to create review");
	}
};

export const addUpvotes = async (id: number): Promise<Review> => {
	try {
		const response = await fetch(`${BASE_URL}/reviews/${id}/upvote`, {
			method: "PUT",
		});

		if (!response.ok) {
			throw new Error("Failed to add upvotes");
		}

		return response.json();
	} catch (error) {
		console.error("Error adding upvotes:", error);
		throw new Error("Failed to add upvotes");
	}
};
