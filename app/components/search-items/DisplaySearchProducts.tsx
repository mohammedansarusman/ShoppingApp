"use client";
import React from "react";
import { useSearchItems } from "@/app/hooks/useSearchItems";
import { ProductDetails } from "../home-page/ProductDetails";
import Link from "next/link";


export const DisplaySearchProducts = ({ query }: { query: string }) => {
  const { products, error, isLoading } = useSearchItems(query);
  console.log("products=>", products);

  return (
    <div className="pt-20 justify-center flex flex-wrap gap-5 px-2">
      {products.map((item) => (
        <Link href={`/product/${item.id}`} key={item?.id}>
          <ProductDetails product={item}/>
        </Link>
      ))}
    </div>
  );
};
