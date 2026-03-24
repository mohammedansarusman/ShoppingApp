'use client'
import { useAppSelector } from '@/app/store/hook'

export const BasketCard = () => {
    const basketItems = useAppSelector((store)=>store.cart.basket)
    console.log("basket items=>", basketItems);
  return (
    <div>
        {basketItems.map((item)=><h1 key={item.id}>{item.title}</h1>)}
    </div>
  )
}
