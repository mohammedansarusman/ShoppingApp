"use client";
import { useEffect, useState } from "react";
import { ProductType } from "@/app/utils/types";
import { ProductCard } from "../home-page/ProductCard";

export const RecentlyViewed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const existing = localStorage.getItem("recentlyViewed");
    setItems(existing ? JSON.parse(existing) : []);
  }, []);
  if(items.length===0) return
  return (
    <div className="w-full flex flex-col px-8 mt-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl text-gray-600 font-semibold">Recently Viewed</h2>
      </div>
      <ProductCard products={items} />
    </div>
  );
};
