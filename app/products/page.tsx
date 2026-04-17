import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "@/services";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main className="bg-[var(--parchment)] min-h-screen px-3 py-4 sm:px-6 sm:py-8">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
          // <

        ))}
      </div>
    </main>
  );
}
