// parent component -  the main page.tsx
import { URL } from "@/app/utils/constants";
import { ProductCard } from "./ProductCard";
import Link from "next/link";
import { TOP_PICKS_CRITERIA, TOP_PICKS_LIMIT, TOP_PICKS_SORT, TOP_PICKS_REVALIDATE_MINUTES } from "@/app/utils/constants";


export const TopPicks = async () => {
  const response = await fetch(`${URL}?sortBy=${TOP_PICKS_CRITERIA}&limit=${TOP_PICKS_LIMIT}&order=${TOP_PICKS_SORT}`, {
    next: { revalidate: TOP_PICKS_REVALIDATE_MINUTES*60 }, // 60 seconds * 30 minutes
  });
  // data fetch from api. if any request with in 30 minutes the result from cache. if any from 31st minute then 
  // server the old cached data first fetch new data in the background
  const data = await response.json();
  const { products } = data;

  return (
    <div className="w-full flex flex-col px-8 mt-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl text-gray-600 font-semibold">
          Products
        </h2>
        <Link href={"/top-picks"}>
          <h2 className=" text-gray-600 text-sm underline cursor-pointer">
          View All
        </h2>
        </Link>
        
      </div>
      <ProductCard products = {products}/>
      {/* products is array object  = [{id:1,name:'a'}] */}
    </div>
  );
};
