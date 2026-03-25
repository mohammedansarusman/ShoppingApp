import { ShoppingCart } from "lucide-react"

export const HeaderBasket = () => {
  return (
    <header className="flex justify-start gap-2 items-center font-bold text-xl">
        <ShoppingCart size={30}/>
        <h1 >Basket</h1>
        <h1>{`(${10})`}</h1>
      </header>
  )
}
