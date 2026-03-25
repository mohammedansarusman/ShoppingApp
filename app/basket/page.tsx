import { BasketCard } from "../components/basket/BasketCard";
import { HeaderBasket } from "../components/basket/HeaderBasket";
import { BasketButtons } from "../components/basket/BasketButtons";

export default function BasketPage() {
  return (
    <div className="w-full h-screen pt-25 bg-white px-2">
      {/* shopping cart - Basket  - item quantity */}
      <HeaderBasket />
      <div className="flex flex-col items-center">
        {/* Continue shopping and Checkout securely buttons */}
        <BasketButtons />
        <div className="w-full flex flex-col items-start">
          <BasketCard />
        </div>
      </div>
    </div>
  );
}
