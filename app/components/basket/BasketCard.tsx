"use client";
import { useAppSelector } from "@/app/store/hook";
import { BasketDetails } from "./BasketDetails";

export const BasketCard = () => {
  const basketItems = useAppSelector((store) => store.cart.basket);
  const totalAmount = basketItems.reduce((acc,item)=>{
    const discountAmount = item.price * (item.discountPercentage/100);
    return acc+((item.price-discountAmount)*item.units)},0)
  return (
    <div className="mt-10 w-full flex flex-col px-2">
      <div className="w-full flex justify-between items-center text-md font-bold">
        <p>Basket Total</p>
        <p>{totalAmount.toFixed(2)}</p>
      </div>
      <p className="mt-4 text-md font-semibold">Your items</p>
      {basketItems.map((item,index) => (
        <div key={`${item.id}${index}`} className="">
          <BasketDetails items = {item}/>
        </div>
      ))}
    </div>
  );
};
