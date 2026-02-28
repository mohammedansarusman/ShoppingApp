// parent component -  <NavigationBar/>
import { MenuIcon, XIcon } from "lucide-react";
import { NavBarIcon } from "./NavBarIcon";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Home, UserCircle } from "lucide-react";

export const MobileNavigationBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <NavBarIcon
            iconName="Menu"
            iconImage={MenuIcon}
            className="lg:hidden flex flex-col items-center "
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="w-full bg-white data-[state=open]:duration-500 data-[state=closed]:duration-500"
        >
          <SheetHeader>
            <SheetTitle className=" flex justify-between py-4 px-4">
              <p className="text-gray-600 text-2xl font-bold">Menu</p>
              <SheetClose asChild className="outline-none cursor-pointer">
                <button>
                  <XIcon className="text-pink-600 hover:font-bold hover:scale-105 transition-all duration-500" />
                </button>
              </SheetClose>
            </SheetTitle>
            <div className="w-full h-px bg-gray-400"></div>
          </SheetHeader>
          <div className="w-full flex flex-col items-start text-gray-600 px-4">
            {/* Home and Account  */}
            <div className="flex flex-col items-start gap-4">
              {/* Home button */}
              <SheetClose asChild>
                <Link href="/">
                  <NavBarIcon
                    iconName="Home"
                    iconImage={Home}
                    className="flex justify-start text-lg font-bold items-center gap-2"
                  />
                </Link>
              </SheetClose>

              {/* Account/User button */}
              <SheetClose asChild>
                <Link href={"/user"}>
                  <NavBarIcon
                    iconName="Account"
                    iconImage={UserCircle}
                    className="flex justify-start text-lg font-bold items-center gap-2"
                  />
                </Link>
              </SheetClose>
            </div>
            <div className="flex flex-col items-start gap-4 mt-4">
              <h1 className="text-xl font-bold text-gray-600">Categories</h1>
            </div>
            <div className="w-full h-px bg-gray-400 mt-4"></div>

            <h1>Menu</h1>
            <h1>Menu</h1>
            <h1>Menu</h1>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
