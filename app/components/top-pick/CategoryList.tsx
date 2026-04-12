"use client";
import { useProductCategory } from "../../hooks/useProductCategory";
import { Checkbox } from "@/components/ui/checkbox";
export const CategoryList = () => {
  const categories: string[] = useProductCategory();
  if (!categories) return;
  return (
    <div className="w-full overflow-scroll">
      <div className="w-full h-70 flex flex-col items-start  mt-4 py-3 gap-2 px-4">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2 border border-gray-300 w-full px-4 py-2 rounded-full">
            <Checkbox id={category} />
            <label htmlFor={category} className="capitalize">{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
