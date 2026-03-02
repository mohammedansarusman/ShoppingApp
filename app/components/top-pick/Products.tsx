"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "@/app/utils/constants";
import { ProductDetails } from "../home-page/ProductDetails";

export const Products = () => {
  const [page, setPage] = useState(0);
  const productsPerPage = 30;

  const fetchTopPicks = async (page: number) => {
    const skip = (page - 1) * productsPerPage;
    const response = await axios.get(`${URL}?limit=${productsPerPage}&skip=${skip}`);
    return response.data;
  };

  const { error, data, isLoading } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchTopPicks(page),
  });

  return (
    <div className="w-full flex flex-col">
      <h1>products</h1>
      <div className="py-10 justify-center flex flex-wrap gap-5 px-2">
          {data?.products.map((item) => (
            <ProductDetails product={item} key={item?.id} />
          ))}
      </div>
    </div>
  );
};
