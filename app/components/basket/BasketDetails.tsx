import { CartItem } from "@/app/utils/types";
import Image from "next/image";

export const BasketDetails = ({ items }: { items: CartItem }) => {
    if(!items) return;
  return (
    <div className="max-w-200 md:max-w-100 h-30 bg-gray-300 flex ">
        {/* image */}
        <div className="w-20 bg-blue-500">
            <Image src={items.thumbnail} alt="pic" width={800} height={1000} />
        </div>
        {/* product description */}
        <div className="w-75 h-30 bg-green-300"></div>
        {/*  */}
    
    </div>
  );
};
