import Breadcrumbs from "./Breadcrumbs";
import Carousel from "./Carousel";
import ProductContent from "./ProductContent";
import {fetchProduct} from '@/services/index';

export default async function ProductSection({ productId }: { productId: number }) {
    const product = await fetchProduct(productId);


    return (
        <div>
            <div className="w-full  || p-2">
                This box is the product section (string to delete)
                <div className="flex-col gap-2">
                    <Breadcrumbs productName={product.name} />
                    <div className="flex flex-col lg:flex-row gap-2">
                        <div className="w-full lg:w-2/3">
                            <Carousel images={product.imageUrls}/>
                        </div>
                        <div className="w-full lg:w-1/3">
                            <ProductContent id={productId}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

