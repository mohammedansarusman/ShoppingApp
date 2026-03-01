import { CustomButton } from "../components/general/CustomButton";
import { Products } from "../components/top-pick/Products";

export default function TopPicks() {
  return (
    <div className="w-full bg-pink-50 pt-25">
      {/*filter and sort/recommned buttom  */}
      <header className="flex justify-around items-center text-base font-bold ">
        <CustomButton name="Filter"/>
        <CustomButton name="Recommended"/>
      </header>
      {/* Display the products */}
      <main className="w-full ">
        <Products />
      </main>
    </div>
  );
}
