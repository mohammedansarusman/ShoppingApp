  "use client";
  import { useState } from "react";
  import { useQuery } from "@tanstack/react-query";
  import axios from "axios";
  import { URL } from "@/app/utils/constants";
  import { ProductDetails } from "../home-page/ProductDetails";
  import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

  export const Products = () => {
    const [page, setPage] = useState(1);
    const productsPerPage = 20;

    const fetchTopPicks = async (page: number) => {
      const skip = (page - 1) * productsPerPage;
      const response = await axios.get(`${URL}?limit=${productsPerPage}&skip=${skip}`);
      return response.data;
    };

    const { error, data, isLoading } = useQuery({
      queryKey: ["products", page],
      queryFn: () => fetchTopPicks(page),
    });
    if (isLoading) return <p>Loading...</p>;
    if(!data) return null

    const totalPages = Math.ceil(data.total/productsPerPage);

    console.log("data in query=>",data)
    console.log("TOTAL PAGES=>",totalPages);

    return (
      <div className="w-full flex flex-col">
        <h1>products</h1>
        <div className="py-10 justify-center flex flex-wrap gap-5 px-2">
            {data?.products.map((item) => (
              <ProductDetails product={item} key={item?.id} />
            ))}
            {/* Pagination */}
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => page > 1 && setPage(prev=>prev-1)}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={page === i + 1}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => page < totalPages && setPage(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
        </div>
      </div>
    );
  };
