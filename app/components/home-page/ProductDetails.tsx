// parent component - <ProductCard />
import Image from "next/image";
import { ProductType } from "@/app/utils/types";

type ProductDetailsProps = {
  product: ProductType;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="w-50 h-full shrink-0 text-gray-600 flex flex-col gap-1">
      <div className="w-50 h-60 border border-gray-200 rounded-xl relative">
        {/* Product Image */}
        <Image
          src={product.thumbnail}
          alt="item-pic"
          width={1000}
          height={1000}
          className="w-full h-full "
        />
        <div
          className="absolute top-0 w-20 bg-pink-600 h-5 
                          rounded-tl-xl rounded-br-xl text-xs text-white font-semibold flex justify-center items-center"
        >
          <p>{`${Math.round(product?.discountPercentage)}% off`}</p>
        </div>
      </div>
      <p className="font-light text-sm">
        {product?.brand ? product.brand : product?.title}
      </p>
      <p className="font-semibold text-sm truncate">{product?.title}</p>
      {/* discounted price and actual price */}
      <div className="w-full h-10 flex justify-between items-center">
        <p className="text-pink-600 text-base font-bold">{`AED ${Math.round(product?.price - product?.price * (product?.discountPercentage / 100))}`}</p>
        <p className="text-sm line-through">{`AED ${product?.price}`}</p>
      </div>
    </div>
  );
};
