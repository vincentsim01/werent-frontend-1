import Breadcrumbs from "./Breadcrumbs";
import Carousel from "./Carousel";
import ProductContent from "./ProductContent";

export default function ProductSection() {
	return (
		<div>
			<div className="w-full outline-2 outline-b outline-gray-500 || p-2">
				This box is the product section (string to delete)
				<div className="flex-col gap-2">
					<Breadcrumbs />
					<div className="flex flex-col lg:flex-row gap-2">
						<div className="w-full lg:w-2/3">
							<Carousel />
						</div>
						<div className="w-full lg:w-1/3">
							<ProductContent />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
