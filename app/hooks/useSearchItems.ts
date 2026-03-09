"use client";
import { useEffect, useState } from "react";
import { URL } from "../utils/constants";
import axios from "axios";
type SearchItemProps = {
  title: string;
  description: string;
  id: number;
  thumbnail: string;
} 


export const useSearchItems = (searchTerm: string|null): SearchItemProps[] | null => {
  const [data, setData] = useState<SearchItemProps[]>([]);
  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(`${URL}/search?q=${searchTerm}`);
      setData(response.data.products);
    };
    fetchSearchResults();
  }, [searchTerm]);
  if(!searchTerm) return [];

  return data;
};
