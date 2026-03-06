import { CustomButton } from "../components/general/CustomButton";
import { Products } from "../components/top-pick/Products";
import { FilterButton } from "../components/home-page/FilterButton";
import { SortButton } from "../components/home-page/SortButton";

export default function TopPicks() {
  return (
    <div className="w-full bg-white pt-20">
      {/*filter and sort/recommned buttom  */}
      <header className="w-full h-20 flex justify-around items-center text-base font-bold fixed z-50 g-white/30 backdrop-blur-md">
        <FilterButton/>
        <SortButton/>
      </header>
      {/* Display the products */}
      <main className="w-full pt-20">
        <Products />
      </main>
    </div>
  );
}
