import React from "react";
import { Lock } from "lucide-react";

export const BasketButtons = () => {
  return (
    <>
      <button className="mt-4 w-100 h-12 bg-black text-white font-bold py-2 rounded-md block cursor-pointer md:hidden">
        Continue Shopping
      </button>
      <div className="flex justify-center items-center gap-2 mt-4 w-100 h-12 bg-green-700 text-white font-bold py-2 rounded-md cursor-pointer">
        <Lock size={20} />
        <h1>Checkout securely</h1>
      </div>
    </>
  );
};
