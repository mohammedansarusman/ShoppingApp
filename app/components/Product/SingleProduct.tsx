"use client";
import { useProductDetails } from "@/app/hooks/useProductDetails";
import { SingleProductImages } from "./SingleProductImages";
import { ProductDescription } from "./ProductDescription";
import { LoadingSingleproduct } from "./LoadingSingleproduct";
import { ProductCardProps } from "@/app/utils/types";
import { ProductType } from "@/app/utils/types";

type ProductIdType = {
  productId: string;
};

export const SingleProduct = ({ productId }: ProductIdType) => {
  const { data, error, isLoading } = useProductDetails(productId);
  if(data){
    const product = data;
    const existing = localStorage.getItem("recentlyViewed");

      let items: ProductType[] = existing ? JSON.parse(existing) : [];

      // remove duplicate if already exists
      const filtered: ProductType[] = items.filter(
        (item) => item.id !== product.id,
      );

      // add new item at the beginning
      const updatedItems = [product, ...filtered];

      // store only last 5 items
      localStorage.setItem(
        "recentlyViewed",
        JSON.stringify(updatedItems.slice(0, 5)),
      );
  }
  
  return (
    <div className="">
      {isLoading && <LoadingSingleproduct />}
      {/* Image Carousel */}
      {data && <div className="w-full grid grid-cols-1 md:grid-cols-2 md:px-8">
        <div>
          <SingleProductImages image={data?.images} />
        </div>
        <div className="flex flex-col justify-start md:pt-10">
          <ProductDescription description={data} />
          <div className="w-full flex justify-center items-center py-5">
            <button className="w-50 h-10 bg-sky-600 text-white rounded-md ">
              {" "}
              ADD TO CART
            </button>
          </div>
        </div>
      </div>}
    </div>
  );
};
