'use client'
import { useQuery } from "@tanstack/react-query";
import { URL } from "../utils/constants";
import axios from "axios";

export const useProductCategory = (): string[] => {
    const fetchCategories = async()=>{
        const response = await axios.get(`${URL}/category-list`);
        return response.data;
    }
    const {data} = useQuery({
        queryKey: ["productCategories"],
        queryFn: fetchCategories,
        staleTime: 1000 * 60 * 60, // 1 hour
    });
    return data; 
}