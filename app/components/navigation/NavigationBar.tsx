// parent component is page.tsx
import { Heart, ShoppingCart, UserCircle } from "lucide-react";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MobileNavigationBar } from "./MobileNavigationBar";
import { NavBarIcon } from "./NavBarIcon";
export const NavigationBar = () => {
  return (
    <div className="w-full h-20 pt-5 flex items-center justify-between px-4 text-gray-600 
    bg-white/30 backdrop-blur-md fixed z-30 lg:justify-around top-0
    border-b border-gray-300">
      {/* Hamburger menu  & logo*/}
      <aside className="flex items-center gap-8 md:gap-20 lg:gap-40">
        {/* Menu icon -  when menu icon clicked then a Shadcn `sheet will pop-up */}
        <MobileNavigationBar/>
        <Link href={"/"}>
          <Image
          src={"/logo.svg"}
          width={100}
          height={100}
          alt="menu-icon"
          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
        />
        </Link>
        
        {/* search bar open when screen become medium width */}
        <aside className="hidden md:w-60 lg:w-100 xl:w-130 md:h-12 md:flex items-center rounded-md">
          <div className="w-3/4 h-full border-l border-t border-b border-gray-300 rounded-l-md"></div>
          <div className="w-12 h-full bg-pink-600 rounded-r-md flex items-center justify-center">
            <SearchIcon color="white" />
          </div>
        </aside>
      </aside>

      {/* Search - Account  - Saved -  Basket or cart icon */}
      <aside className="flex items-center gap-4 md:gap-6 lg:gap-10">
        {/* Search */}
        <NavBarIcon
          iconName="Search"
          iconImage={SearchIcon}
          className="md:hidden flex flex-col items-center "
        />
        {/* User */}
        <NavBarIcon iconName="Account" iconImage={UserCircle} className="flex flex-col items-center " />
        {/* Saved */}
        <NavBarIcon iconName="Saved" iconImage={Heart} className="flex flex-col items-center "/>
        {/* Basket/Cart Icon */}
        <NavBarIcon iconName="Cart" iconImage={ShoppingCart} className="flex flex-col items-center "/>
      </aside>
    </div>
  );
};
