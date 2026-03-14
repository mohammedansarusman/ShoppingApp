import { ProductCardProps } from "@/app/utils/types";
import { ProductDetails } from "./ProductDetails";
import Link from "next/link";


export const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <div className="flex w-full h-80">
      <div className="flex overflow-scroll gap-4 px-2 py-2">
        {products.map((item) => (
          <Link href={`/product/${item.id}`} key={item?.id}>
            <ProductDetails product = {item} />
          </Link>
        ))}
      </div>
    </div>
  );
};
