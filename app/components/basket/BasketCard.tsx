"use client";
import { useAppSelector } from "@/app/store/hook";
import { BasketDetails } from "./BasketDetails";

export const BasketCard = () => {
  const basketItems = useAppSelector((store) => store.cart.basket);
  return (
    <div className="mt-10 w-full flex flex-col px-2">
      <div className="w-full flex justify-between items-center text-md font-bold">
        <p>Basket Total</p>
        <p>{basketItems.length}</p>
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
