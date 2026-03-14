"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../utils/constants";

export const useProductDetails = (productId: string): any => {
    const [data, setData] = useState("");
  useEffect(() => {
    const fetchSingleProduct = async (productId: string) => {
      const response = await axios.get(`${URL}/${productId}`);
      console.log("response = >",response.data);
      setData(response.data);
    };
    fetchSingleProduct(productId);
  }, []);
  if(!data) return;
  return data;
};
