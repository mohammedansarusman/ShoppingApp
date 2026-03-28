"use client";
import { useAppSelector } from "@/app/store/hook";
import { ShoppingCart } from "lucide-react";

export const HeaderBasket = () => {
  const basket = useAppSelector((store) => store.cart.basket);
  const totalUnits = basket.reduce((acc,item)=>acc+item.units,0)
  return (
    <header className="flex justify-start gap-2 items-center font-bold text-xl text-gray-600">
      <ShoppingCart size={30} />
      <h1>Basket</h1>
      <h1>{`(${totalUnits})`}</h1>
    </header>
  );
};
