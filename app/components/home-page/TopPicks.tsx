// parent component -  the main page.tsx
import { URL } from "@/app/utils/constants";
import Image from "next/image";

type ItemProps = {
    id: number;
    title: string;
    brand: string;
    thumbnail: string;
    discountPercentage: number;
}
export const TopPicks = async () => {
  const response = await fetch(`${URL}?sortBy=rating&order=desc&limit=10`, {
    next: { revalidate: 1800 },
  });
  const data = await response.json();
  const {products} = data;
  console.log("data", data);

  return (
    <div className="w-full flex flex-col px-8 mt-4">
      <header className="text-xl text-gray-600 font-semibold">
        Our Top Picks
      </header>
      <div className="flex w-full h-80">
        <div className="flex overflow-scroll gap-4 px-2 py-2">
          {products.map((item: ItemProps) => (
            <div className="w-50 h-full shrink-0 text-gray-600 flex flex-col gap-1" key={item?.id}>
              <div className="w-full h-60 border border-gray-200 rounded-xl relative">
                  <Image src={item.thumbnail} alt="item-pic" width={750} height={1000} className="w-full h-full "/>  
                  <div className="absolute top-0 w-20 bg-pink-600 h-5 
                  rounded-tl-xl rounded-br-xl text-xs text-white font-semibold flex justify-center items-center">
                    <p>{`${Math.round(item?.discountPercentage)}% off`}</p>
                  </div>
              </div>
              <p className="font-light text-sm">{item?.brand ? item.brand : item?.title}</p>
              <p className="font-semibold text-sm truncate">{item?.title}</p>
              <div className="w-full h-10 bg-red-300">

              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
