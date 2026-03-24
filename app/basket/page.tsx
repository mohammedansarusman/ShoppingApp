import { Lock, ShoppingCart } from "lucide-react";
import { BasketCard } from "../components/basket/BasketCard";

export default function BasketPage() {
  return (
    <div className="w-full h-screen pt-20 bg-green-400">
      <header className="flex justify-start">
        <ShoppingCart />
        <h1>Basket</h1>
        <h1>{`{hello}`}</h1>
      </header>
      <div className="flex flex-col items-center">
        <button>Continue Shopping</button>
        <div className="flex">
          <Lock />
          <h1>Checkout securely</h1>
        </div>
        <div className="w-full flex justify-between items-center">
            <p>Basket Total</p>
            <p>{10}</p>
        </div>
        <div className="w-full flex flex-col items-start">
            <p>Your items</p>
            <div>
                <BasketCard/>
            </div>
        </div>
      </div>
    </div>
  );
}
