// parent component - top-picks - page.tsx

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CustomButton } from "../general/CustomButton";

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
        </SheetContent>
      </Sheet>
    </>
  );
};
