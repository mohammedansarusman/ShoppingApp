"use client";
import { useEffect, useState } from "react";
import { URL } from "../utils/constants";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
type QueryProps = {
  title: string;
  description: string;
  id: number;
  thumbnail: string;
};

export const useSearchItems = (
  query: string | null,
): { products: QueryProps[]; isLoading: boolean; error: unknown } => {
  const fetchSearchResults = async () => {
    const response = await axios.get(`${URL}/search?q=${query}`);
    return response.data.products;
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["searchResults", query],
    queryFn: fetchSearchResults,
    enabled: !!query, // Only run the query if there is a query string
    staleTime: 5 * 60 * 1000, // Cache results for 5 minutes
  });

  return {
    products: data ?? [],
    isLoading,
    error,
  };
};
