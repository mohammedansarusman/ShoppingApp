'use client'
import { useProductDetails } from "@/app/hooks/useProductDetails"
import { SingleProductImages } from "./SingleProductImages"
import { ProductDescription } from "./ProductDescription";

type ProductIdType = {
  productId: string;
}

export const SingleProduct = ({productId}: ProductIdType) => {
  const {data,error,isLoading} = useProductDetails(productId)
  console.log("details=>",data);
  if(isLoading){
    <h1 className="mt-20">Loading....</h1>
  }
  if(!data) return ;
  return (
    <div className="w-full">
      {/* Image Carousel */}
      <SingleProductImages image = {data?.images}/>
      <ProductDescription description = {data}/>
      <div className="w-full flex justify-center items-center">
        <button className="w-50 h-10 bg-sky-600 text-white rounded-md "> ADD TO CART</button>
      </div>

    </div>
  )
}
