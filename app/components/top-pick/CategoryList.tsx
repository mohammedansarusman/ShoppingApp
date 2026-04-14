"use client";
import { useProductCategory } from "../../hooks/useProductCategory";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export const CategoryList = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selected, setSelected] = useState<string[]>([]);
  const categories: string[] = useProductCategory();
  
  const handleChange = (category: string) => {
    let updated: string[];
    if (selected.includes(category)) {
      setSelected((prev) => prev.filter((item) => item !== category));
      updated = selected.filter((item) => item !== category);
      const params = new URLSearchParams(searchParams);
      if (updated.length > 0) {
        params.set("category", updated.join(","));
        router.push(`${window.location.pathname}?${params.toString()}`);
      } else {
        params.delete("category");
      }
    }else{
      updated = [...selected, category];
      setSelected((prev) => [...prev, category]);
      const params = new URLSearchParams(searchParams);
      params.set("category", updated.join(","));
      router.push(`${window.location.pathname}?${params.toString()}`);
    }
  }
  
  if (!categories) return;
  return (
    <div className="w-full overflow-scroll">
      <div className="w-full h-70 flex flex-col items-start  mt-4 py-3 gap-2 px-4">
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2 border border-gray-300 w-full px-4 py-2 rounded-full">
            <Checkbox id={category} checked={selected.includes(category)} onCheckedChange={()=>handleChange(category)} />
            <label htmlFor={category} className="capitalize">{category}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
