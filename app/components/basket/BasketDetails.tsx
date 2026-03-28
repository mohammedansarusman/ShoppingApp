'use client'
import { CartItem } from "@/app/utils/types";
import { CartItemWithUnits } from "@/app/utils/types";
import { Rating } from "../Product/Rating";
import Image from "next/image";
import { addQuantity, minusQuantity } from "@/app/store/cartSlice";
import { useAppDispatch } from "@/app/store/hook";


export const BasketDetails = ({ items }: { items: CartItemWithUnits }) => {
  const discount = items.discountPercentage;
  const rate = items.price;
  const discountedPrice = rate - (rate * (discount / 100));
  const total = discountedPrice * items.units;
  const dispatch = useAppDispatch();


  const handlePlus = (): void =>{
    dispatch(addQuantity(items))

  }
  const handleMinus = (): void =>{
    items.units>1 && dispatch(minusQuantity(items))
    
  }
  if (!items) return null;
  return (
    <div className="max-w-120 md:max-w-100 lg:max-w-120 xl:max-w-140 h-30 flex mt-3 border-t border-gray-200 text-gray-600">
      {/* image */}
      <div className="w-2/8">
        <Image src={items.thumbnail} alt="pic" width={800} height={1000} className="w-full h-full object-contain" />
      </div>
      {/* product description */}
      <div className="w-5/8 h-30 pl-2 pt-2">
        <h1 className="font-light text-sm">
          {items.brand ? items.brand : items.title}
        </h1>
        <h1 className="font-bold text-md">{items.title}</h1>
        <Rating rating={items.rating} />
      </div>
      {/* rate and delete icon */}
      <div className="w-2/8 h-30 flex flex-col justify-between items-end pr-2 text-sm font-semibold pt-2" >
        <h1>{`AED ${total.toFixed(2)}`}</h1>
        <div className="flex border border-gray-200 px-4 py-2 gap-2">
          <button className="cursor-pointer" onClick={()=>handleMinus()}>-</button>
          <p className="px-2">{items.units}</p>
          <button className="cursor-pointer" onClick={handlePlus}>+</button>
        </div>
      </div>
    </div>
  );
};
