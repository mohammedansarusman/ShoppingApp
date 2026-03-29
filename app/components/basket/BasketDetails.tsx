'use client'
import { CartItemWithUnits } from "@/app/utils/types";
import { Rating } from "../Product/Rating";
import Image from "next/image";
import { addQuantity, minusQuantity, deleteItem } from "@/app/store/cartSlice";
import { useAppDispatch } from "@/app/store/hook";
import { Trash2 } from "lucide-react";


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
  const handleDelete = () =>{
    dispatch(deleteItem(items))
  }
  if (!items) return null;
  return (
    <div className="max-w-120 md:max-w-110 lg:max-w-120 xl:max-w-140  flex mt-3 border-t border-gray-200 text-gray-600">
      {/* image and quantity buttons */}
      <div className="w-2/8 h-full flex flex-col items-center">
        <Image src={items.thumbnail} alt="pic" width={800} height={1000} className="w-full h-full object-contain" />
        <div className="flex justify-between items-center border border-gray-200 w-20 h-10 text-sm">
          <button className="cursor-pointer w-2/8" onClick={()=>handleMinus()}>-</button>
          <p className="px-2">{items.units}</p>
          <button className="cursor-pointer w-2/8" onClick={handlePlus}>+</button>
        </div>
      </div>
      {/* product description */}
      <div className="w-4/8 h-full pl-2 pt-2">
        <h1 className="font-light text-sm">
          {items.brand ? items.brand : items.title}
        </h1>
        <h1 className="font-bold text-md">{items.title}</h1>
        <Rating rating={items.rating} />
      </div>
      {/* rate and delete icon */}
      <div className="w-2/8 flex flex-col justify-between items-end pr-2 text-sm font-semibold py-2" >
        <h1>{`AED ${total.toFixed(2)}`}</h1>
        <Trash2 onClick={handleDelete} className="cursor-pointer text-gray-500 hover:scale-110 transition-all duration-300" size={20}/>
      </div>
    </div>
  );
};
