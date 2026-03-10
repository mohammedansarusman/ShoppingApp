// parent componenet:
"use client";
import { SearchIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSearchItems } from "@/app/hooks/useSearchItems";
import Image from "next/image";

export const SearchBox = () => {
  const [focus, setFocus] = useState(false);  // to track focus state of the search input
  const [searchTerm, setSearchTerm] = useState(""); // to track the current value of the search input

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const query: string | null = searchParams.get("query");
  
  // console.log("Query from URL: ", query);
  // Fetch search results based on the query parameter
  const {products, isLoading, error} = useSearchItems(query);
  console.log("products in searchBox: ", products);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("query", searchTerm);
    router.push(`${pathname}/?${params.toString()}`);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    console.log("useEffect triggered");
    const timeOut = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      params.set("query", searchTerm);
      router.replace(`${pathname}/?${params.toString()}`);      

    },500)
    return ()=>{
      clearTimeout(timeOut);
    }
  }, [searchTerm]);
  useEffect(() => {
  if (query) {
    setSearchTerm(query);
  }else{
    router.push(`${pathname}`);

  }
}, [query]);

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
      {isLoading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-center">Error: {String(error)}</p>}
      {products && (
        <div className="w-full px-4 ">
          <h1 className="mt-4">Suggested Products</h1>
          {products.map((item) => (
            <div  key={item.id} className="w-full flex flex-col justify-center gap-4 mt-2 bg-gray-100 
            rounded-md cursor-pointer py-2 hover:bg-gray-200 transition-colors duration-300">
              <div
                className="w-full h-20 flex justify-start items-center gap-3"
              >
                <div className="w-20 h-full">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-fill"
                  />
                </div>
                <div className="w-25 h-full flex-1">
                  <h1 className="text-sm font-bold">{item.title}</h1>
                  <p className=" w-full truncate text-sm font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
