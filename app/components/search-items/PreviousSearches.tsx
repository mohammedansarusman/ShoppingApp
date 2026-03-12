'use client'
import { XIcon } from "lucide-react";
import React,{useState} from "react";

export const PreviousSearches = () => {

  const previous = localStorage.getItem("search");
  const items = previous ? JSON.parse(previous) : [];
  const [data, setData] = useState(items);


  const handleClearAll = ()=>{
    setData([])
    localStorage.setItem('search',"");
  }
  const handleCloseButton=(index: number): void=>{
    const filteredData = data.filter((item: string[],i: number)=>index!==i)
    setData(filteredData);
    localStorage.setItem('search',JSON.stringify(filteredData));

  }

  return (
    <div className="w-full px-6 py-4">
      {data.length>0 && <div className="w-full flex justify-between items-center">
        <h1>Previous Searches</h1>
        <button className="cursor-pointer" onClick={handleClearAll}>Clear All</button>
      </div>}
      <div className="flex flex-col gap-2 py-4">
        {data.map((item: string, index: number) => (
          <div
            key={item}
            className="flex w-full h-10 justify-between items-center"
          >
            <p className="capitalize">{item}</p>
            <XIcon className="text-gray-600 hover:text-pink-500" onClick={()=>handleCloseButton(index)}/>
          </div>
        ))}
      </div>
    </div>
  );
};
