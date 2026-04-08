'use client'
import { useAppSelector } from "@/app/store/hook";

export const CartTotal = () => {
  const basket = useAppSelector((store) => store.cart.basket);
  const totalUnits = basket.reduce((acc, item) => acc + item.units, 0);
  return (
    <div className="w-5 h-5 bg-pink-500 text-white absolute -top-3 -right-1 rounded-full flex justify-center items-center text-xs">
        <p>{totalUnits}</p>
    </div>
  )
}
