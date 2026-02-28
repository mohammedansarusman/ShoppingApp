// parent component -  the main page.tsx
import { URL } from "@/app/utils/constants";
import { ProductCard } from "./ProductCard";


export const TopPicks = async () => {
  const response = await fetch(`${URL}?sortBy=rating&order=desc&limit=10`, {
    next: { revalidate: 1800 },
  });
  const data = await response.json();
  const { products } = data;

  return (
    <div className="w-full flex flex-col px-8 mt-4">
      <header className="text-xl text-gray-600 font-semibold">
        Our Top Picks
      </header>
      <ProductCard products = {products}/>
      
    </div>
  );
};
