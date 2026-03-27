"use client";
import { useAppSelector } from "@/app/store/hook";
import { ShoppingCart } from "lucide-react";

export const HeaderBasket = () => {
  const cartQuantity = useAppSelector((store) => store.cart.cartQuantity);
  return (
    <header className="flex justify-start gap-2 items-center font-bold text-xl text-gray-600">
      <ShoppingCart size={30} />
      <h1>Basket</h1>
      <h1>{`(${cartQuantity})`}</h1>
    </header>
  );
};
