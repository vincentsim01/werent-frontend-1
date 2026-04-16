import { Product } from "@/types";

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID").format(product.price);

  return (
    <div className="bg-white border border-[var(--border)] overflow-hidden rounded transition-transform duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[var(--parchment)] overflow-hidden">
        <img
          src={product?.imageUrls?.[0] || ""}
          alt={product.name}
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {/* <div
                    className="absolute bottom-2.5 left-2.5 bg-[var(--ink)] text-[var(--parchment)] text-[9px] uppercase px-2 py-1"
                    style={{ fontFamily: "var(--font-dm-mono)", letterSpacing: "0.12em" }}
                >
                    {product.category}
                </div> */}
      </div>

      {/* Body */}
      <div className="px-3.5 pt-3.5 pb-4">
        {/* <p
                    className="text-[10px] uppercase text-[var(--warm-gray)] mb-1"
                    style={{ fontFamily: "var(--font-dm-mono)", letterSpacing: "0.14em" }}
                >
                    {product.brand}
                </p> */}
        <h3 className="text-[15px] font-medium text-[var(--ink)] mb-2.5 leading-snug truncate">
          {product.name}
        </h3>

        {/* Sizes */}
        {/* <div className="flex flex-wrap gap-1 mb-3">
                    {product.size.map((s) => (
                        <span
                            key={s}
                            className="text-[10px] px-1.5 py-0.5 border border-[var(--border)] rounded text-[var(--warm-gray)]"
                            style={{ fontFamily: "var(--font-dm-mono)", letterSpacing: "0.06em" }}
                        >
                            {s}
                        </span>
                    ))}
                </div> */}

        {/* Footer */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span
              className="text-[13px] font-medium"
              style={{ color: "var(--ink)" }}
            >
              Rp {formattedPrice}
            </span>
            {/* <span
                            className="text-[11px] text-[var(--warm-gray)]"
                        >
                            / {product.rentalDays} Days
                        </span> */}
          </div>
          <button
            className="w-full sm:w-auto text-center bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-white text-[11px] 
                        rounded uppercase px-3.5 py-1.5 transition-colors duration-200 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-dm-mono)",
              letterSpacing: "0.1em",
            }}
          >
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}
