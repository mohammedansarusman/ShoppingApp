"use client";
import { useEffect, useState } from "react";
import { URL } from "../utils/constants";
import axios from "axios";

export const useSearchItems = (searchTerm: string) => {
    const [data, setData] = useState(null);
  useEffect(() => {
    if (!searchTerm) return;
    const fetchSearchResults = async () => {
      const response = await axios.get(`${URL}/search?q=${searchTerm}`);
      setData(response.data);
    };
    fetchSearchResults();
  }, [searchTerm]);

  return data;
};
