// parent component -  the main page.tsx
import { URL } from "@/app/utils/constants";
import { ProductCard } from "./ProductCard";
import Link from "next/link";


export const TopPicks = async () => {
  const response = await fetch(`${URL}?sortBy=rating&order=desc&limit=10`, {
    next: { revalidate: 1800 },
  });
  const data = await response.json();
  const { products } = data;

  return (
    <div className="w-full flex flex-col px-8 mt-6">
      <div className="w-full flex items-center justify-between">
        <h2 className="text-xl text-gray-600 font-semibold">
          Our Top Picks
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
