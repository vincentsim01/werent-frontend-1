export default function SizeSelector() {
    const sizes = ["S", "M", "L", "XL"];

    return (
        <div 
            className="flex flex-wrap gap-2 mb-3 font-medium text-[var(--werent-green-1)]"
            style= {{ 
                fontFamily: "var(--font-geist-mono)", 
                letterSpacing: "0.06em",
                fontSize: "var(--werent-font-3)"
            }}
        >
            {sizes.map((size) => (
                <span
                    key={size}
                    className="border border-[var(--werent-green-1)] px-5 py-0.5 transition-opacity hover:opacity-60 cursor-pointer"
                >
                    {size}
                </span>
            ))}
        </div>
    )
}
