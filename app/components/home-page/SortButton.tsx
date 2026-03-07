// parent component - top-picks - page.tsx
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { CustomButton } from "../general/CustomButton";
import { MenuItemsContainer } from "../general/MenuItemsContainer";

export const SortButton = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <CustomButton name="Sort" />
        </SheetTrigger>
        <SheetContent
          side="bottom"
          showCloseButton={false}
          className="w-full h-1/2 bg-white data-[state=open]:duration-500 data-[state=closed]:duration-500"
        >
          <SheetTitle></SheetTitle>
          <div className="w-full h-full flex flex-col items-center gap-5  px-5">
            <MenuItemsContainer caption="Price: Low to High" sortBy = 'price' order = "asc" sortkey = "priceasc"/>
            <MenuItemsContainer caption="Price: High to Low" sortBy = 'price' order = "desc" sortkey = "pricedesc"/>
            <MenuItemsContainer caption="Most Popular" sortBy = 'rating' order = "desc" sortkey = "highestrated"/>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
