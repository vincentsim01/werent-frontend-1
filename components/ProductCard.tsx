import { Product } from "@/types";

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID").format(product.price);

  return (
    <div className="bg-white border border-zinc-300 overflow-hidden rounded transition-transform duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[var(--parchment)] overflow-hidden">
        <img
          src={product?.imageUrls?.[0] || ""}
          alt={product.name}
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>

      {/* Body */}
      <div className="px-3.5 pt-3.5 pb-4">
        <h3 className="text-[15px] font-medium text-[var(--werent-green-1)] mb-2.5 leading-snug truncate">
          {product.name}
        </h3>
        <h3 className="text-[12px] text-[var(--werent-green-1)] mb-2.5 leading-snug truncate">
          {product.brand}
        </h3>

        {/* Footer */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span
              className="text-[13px] font-medium"
              style={{ color: "var(--ink)" }}
            >
              $ {formattedPrice}
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
  );
}
