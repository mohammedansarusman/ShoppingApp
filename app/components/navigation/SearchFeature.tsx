"use client";
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";

export const SearchFeature = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };
  return (
    <div
      className={`w-3/4 h-full border-l border-t border-b ${focus ? "border-pink-500" : "border-gray-300"} rounded-l-md flex items-center px-2`}
    >
      <input
        placeholder="Search products..."
        className="outline-none w-full px-2"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e)=>handleChange(e)}
        value={searchTerm}
      />
      <div className="w-12 h-full bg-pink-600 rounded-r-md flex items-center justify-center">
        <SearchIcon color="white" />
      </div>
    </div>
  );
};
