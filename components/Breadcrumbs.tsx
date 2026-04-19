type BreadcrumbsProps = {
  productName: string;
};

export default function Breadcrumbs({ productName }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full text-[11px] leading-none text-neutral-700 sm:text-xs"
    >
      <ol className="flex flex-wrap items-center gap-1">
        <li>Home</li>
        <li aria-hidden="true">&gt;</li>
        <li>Shop All</li>
        <li aria-hidden="true">&gt;</li>
        <li>Dress</li>
        <li aria-hidden="true">&gt;</li>
        <li>Maxi Dress</li>
        <li aria-hidden="true">&gt;</li>
        <li className="font-medium text-neutral-900">{productName}</li>
      </ol>
    </nav>
  );
}