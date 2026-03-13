"use client";
import React from "react";
import { useSearchItems } from "@/app/hooks/useSearchItems";
import { ProductDetails } from "../home-page/ProductDetails";

export const DisplaySearchProducts = ({ query }: { query: string }) => {
  const { products, error, isLoading } = useSearchItems(query);
  console.log("products=>", products);

  return (
    <div className="py-10 justify-center flex flex-wrap gap-5 px-2">
      {products.map((item) => (
        <ProductDetails product={item} key={item?.id} />
      ))}
    </div>
  );
};
