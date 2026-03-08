// parent componenet:
"use client";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSearchItems } from "@/app/hooks/useSearchItems";

export const SearchBox = () => {
  const [focus, setFocus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Call api to fetch search results based on searchTerm and update the UI accordingly
  const fetchSearchResults = useSearchItems(searchTerm);
  console.log("Search Results: ", fetchSearchResults.products);
  const searchResults = fetchSearchResults?.products || [];

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle search logic here
    const params = new URLSearchParams(searchParams);
    params.set("query", searchTerm);
    router.push(`${pathname}/?${params.toString()}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form
        className="w-full h-12 flex justify-center rounded-md md:hidden"
        onSubmit={handleSearch}
      >
        <div
          className={`w-3/4 h-full border-l border-t border-b ${focus ? "border-pink-500" : "border-gray-300"} 
        rounded-l-md flex items-center px-2`}
        >
          <input
            placeholder="Search Products..."
            type="text"
            onChange={handleChange}
            value={searchTerm}
            className="w-full outline-none"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
        <button
          className="w-12 h-full bg-pink-600 rounded-r-md flex items-center justify-center cursor-pointer"
          type="submit"
        >
          <SearchIcon color="white" />
        </button>
      </form>
      {fetchSearchResults && (
        <div className="w-full px-4 ">
          <h1>Suggested Products</h1>
          <div className="w-full  bg-red-300">
            {/* {fetchSearchResults.map((item) => 
            <div className="w-full bg-amber-300 h-20">

            </div>)} */}
          </div>
        </div>
      )}
    </>
  );
};
