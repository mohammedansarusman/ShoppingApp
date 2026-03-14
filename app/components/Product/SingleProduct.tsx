'use client'
import { useProductDetails } from "@/app/hooks/useProductDetails"

type ProductIdType = {
  productId: string;
}

export const SingleProduct = ({productId}: ProductIdType) => {
  const singleProduct = useProductDetails(productId)
  console.log("details=>",singleProduct);
  return (
    <div></div>
  )
}
