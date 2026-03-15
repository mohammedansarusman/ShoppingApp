'use client'
import { useProductDetails } from "@/app/hooks/useProductDetails"
import { SingleProductImages } from "./SingleProductImages"

type ProductIdType = {
  productId: string;
}

export const SingleProduct = ({productId}: ProductIdType) => {
  const {data,error,isLoading} = useProductDetails(productId)
  console.log("details=>",data);
  return (
    <div className="w-full bg-blue-300 ">
      <h1>Products</h1>
      <SingleProductImages image = {data?.images}/>
    </div>
  )
}
