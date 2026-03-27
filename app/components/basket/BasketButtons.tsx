import { Lock } from "lucide-react";
import Link from "next/link";

export const BasketButtons = () => {
  return (
    <>
      <Link 
        className="mt-4 w-100 h-12 bg-black text-white font-bold py-2 rounded-md block cursor-pointer md:hidden text-center"
        href={"/"}
      >
        Continue Shopping
      </Link>
      <div className="flex justify-center items-center gap-2 mt-4 w-100 h-12 bg-green-700 text-white font-bold py-2 rounded-md cursor-pointer">
        <Lock size={20} />
        <h1>Checkout securely</h1>
      </div>
    </>
  );
};
