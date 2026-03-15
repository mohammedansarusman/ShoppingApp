"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../utils/constants";
import { useQuery } from "@tanstack/react-query";

export const useProductDetails = (productId: string): any => {
    const fetchSingleProduct = async (productId: string) => {
      const response = await axios.get(`${URL}/${productId}`);
      console.log("response = >",response.data);
      return response.data;

    };

    const {data, error, isLoading} = useQuery({
      queryKey: ["singleItem", productId],
      queryFn: ()=>fetchSingleProduct(productId),
      // enabled: productId,

    })
    return {data, error, isLoading}
};
