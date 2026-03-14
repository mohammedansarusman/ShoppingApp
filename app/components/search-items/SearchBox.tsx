// parent componenet:
"use client";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSearchItems } from "@/app/hooks/useSearchItems";
import { SearchShimmer } from "./SearchShimmer";
import { PreviousSearches } from "./PreviousSearches";
import { SearchProducts } from "./SearchProducts";

export const SearchBox = () => {
  const [focus, setFocus] = useState(false); // to track focus state of the search input
  const [searchTerm, setSearchTerm] = useState(""); // to track the current value of the search input

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const query: string | null = searchParams.get("query");

  // Fetch search results based on the query parameter
  const { products, isLoading, error } = useSearchItems(query);
  console.log("products in searchBox: ", products);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!searchTerm || !query) return;
    let searches: string[] = [];
    const existing = localStorage.getItem("search");
    if (existing) {
      const flag = JSON.parse(existing).some(
        (item: string) => item === searchTerm,
      );
      if (flag) {
        return;
      } else {
        searches = [...JSON.parse(existing), searchTerm];
        if (searches.length > 5) {
          const slicedSearches = [...searches].slice(-5);
          searches = [...slicedSearches];
        }
      }
    } else {
      searches.push(searchTerm);
    }
    localStorage.setItem("search", JSON.stringify(searches));
  };
  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };
  // Click search button
  const handleSearchButton = (): void => {
    (searchTerm || query) && router.push(`${pathname}/products?query=${query}`);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("query", searchTerm);
      router.replace(`${pathname}/?${params.toString()}`);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [searchTerm]);
  useEffect(() => {
    query ? setSearchTerm(query) : router.push(`${pathname}`);
  }, [query]);

  return (
    <>
      <form
        className="w-full h-12 flex justify-center rounded-md"
        onSubmit={handleSubmit}
      >
        <div
          className={`w-3/4 md:w-1/2 lg:w-1/3 h-full border-l border-t border-b ${focus ? "border-pink-500" : "border-gray-300"} 
          rounded-l-md flex items-center px-2`}
        >
          <input
            placeholder="Search Products..."
            type="text"
            onChange={handleChange}
            value={searchTerm}
            className="w-full outline-none"
            onFocus={() => setFocus(true)} // change the border pink
            onBlur={() => setFocus(false)} // change the border gray
          />
        </div>
        <button
          className="w-12 h-full bg-pink-600 rounded-r-md flex items-center justify-center cursor-pointer"
          type="submit"
          onClick={handleSearchButton}
        >
          <SearchIcon color="white" />
        </button>
      </form>

      {isLoading && <SearchShimmer />}
      {error && <p className="mt-4 text-center">Error: {String(error)}</p>}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:px-6">
        {/* previous searches */}
        {!isLoading && <PreviousSearches />}
        {products.length > 0 && ( 
          <div className="w-full px-4 ">
            <h1 className="mt-4">Suggested Products</h1>
            {products.map((item) => (
              // display product image, title and description
              <SearchProducts key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
