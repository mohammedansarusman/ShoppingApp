// parent component - top-picks - page.tsx

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CustomButton } from "../general/CustomButton";
import { CategoryFilter } from "../top-pick/CategoryFilter";

export const FilterButton = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <CustomButton name="Filter" />
        </SheetTrigger>
        <SheetContent
          side="bottom"
          showCloseButton={false}
          className="w-full h-1/2 bg-white data-[state=open]:duration-500 data-[state=closed]:duration-500"
        >
          <SheetTitle></SheetTitle>
          <div className="w-full h-full flex flex-col items-center justify-start py-2 space-y-4">
            {/* category filter */}
            <CategoryFilter />            
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
