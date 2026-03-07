"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
type MenuProps = {
  caption: string;
  sortBy: string;
  order: string;
  sortkey: string;
};
export const MenuItemsContainer = ({ caption, sortBy, order, sortkey }: MenuProps) => {
  const router = useRouter();
  const pathName: string = usePathname();
  const searchParams = useSearchParams();
  const selected: string | null = searchParams.get("sortkey");

  const handleClick = (order: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("order", order);
    params.set("sortBy", sortBy);
    params.set("sortkey",sortkey)
    router.push(`${pathName}?${params.toString()}`);
  };
  return (
    <div
      className="w-full h-15 rounded-full border border-gray-400 flex justify-start items-center pl-4 gap-2"
      onClick={() => handleClick(order)}
    >
      <div
        className={`w-8 h-8 ${sortkey === selected ? "bg-pink-500" : "bg-white"} border border-gray-400 rounded-full flex justify-center items-center`}
      >
        <div className="w-4 h-4 border border-gray-400 rounded-full bg-white"></div>
      </div>
      <p>{caption}</p>
    </div>
  );
};
