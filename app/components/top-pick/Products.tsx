"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { URL } from "@/app/utils/constants";
import { ProductDetails } from "../home-page/ProductDetails";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export const Products = () => {
  const [page, setPage] = useState(1);
  const productsPerPage = 30;
  const firstPage = 1;
  const secondPage = 2;
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const sortBy = searchParams.get('sortBy') || 'rating'
  const order = searchParams.get('order') || 'desc'
  


  const fetchTopPicks = async (page: number, sortBy: string, order: string) => {
    const skip = (page - 1) * productsPerPage;
    const response = await axios.get(
      `${URL}?limit=${productsPerPage}&skip=${skip}&sortBy=${sortBy}&order=${order}`,
    );
    console.log("console in top picks",response.data)
    return response.data;
  };

  const { error, data, isLoading } = useQuery({
    queryKey: ["products", page, sortBy, order],
    queryFn: () => fetchTopPicks(page, sortBy, order),
  });
  if (isLoading) return <p>Loading...</p>;
  if (!data) return null;

  const totalPages = Math.ceil(data.total / productsPerPage);
  const secondLast = totalPages - 1;
  const lastPage = totalPages;

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-xl font-bold text-gray-600 pl-10 mt-5">Top Picks</h1>
      <div className="py-10 justify-center flex flex-wrap gap-5 px-2">
        {data?.products.map((item) => (
          <Link key={item?.id} href={`/product/${item.id}`}>
            <ProductDetails product={item}  />
          </Link>
        ))}
        {/* Pagination */}
        <Pagination className="mt-10">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => page > 1 && setPage((prev) => prev - 1)}
                aria-disabled={page === 1}
                className={
                  page === 1 ? "cursor-not-allowed pointer-events-none" : ""
                }
              >
                Previous
              </PaginationPrevious>
            </PaginationItem>
            {/* page 1  */}
            <PaginationItem>
              <PaginationLink
                className={
                  firstPage === page
                    ? "bg-pink-200 hover:bg-pink-200 pointer-events-none"
                    : "bg-white"
                }
                onClick={() => setPage(firstPage)}
              >
                {firstPage}
              </PaginationLink>
            </PaginationItem>
            {/* page 2 or greater than 2 */}
            <PaginationItem
              className={
                secondPage === page
                  ? "bg-pink-200 rounded-md hover:bg-pink-200 pointer-events-none"
                  : "bg-white"
              }
            >
              {page <= 2 ? (
                <PaginationLink onClick={() => setPage(secondPage)}>
                  {secondPage}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
            {/* page 3 or greater than 3 */}
            <PaginationItem>
              {page >= firstPage + 2 && page <= totalPages - 2 && (
                <PaginationLink className="bg-pink-200 rounded-md hover:bg-pink-200 pointer-events-none">
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
            {/* 4th row */}
            <PaginationItem
              className={
                totalPages - page === 1
                  ? "bg-pink-200 rounded-md hover:bg-pink-200 pointer-events-none"
                  : "bg-white"
              }
            >
              {totalPages - page === 1 ? (
                <PaginationLink>{page}</PaginationLink>
              ) : totalPages - page === 0 ? (
                <PaginationLink onClick={() => setPage(secondLast)}>
                  {page - 1}
                </PaginationLink>
              ) : (
                <PaginationEllipsis />
              )}
            </PaginationItem>
            <PaginationItem
              className={
                totalPages === page
                  ? "bg-pink-200 rounded-md hover:bg-pink-200 pointer-events-none"
                  : "bg-white"
              }
            >
              <PaginationLink onClick={() => setPage(totalPages)}>
                {lastPage}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => page < totalPages && setPage(page + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        {/* <h1>{page}</h1> */}
      </div>
    </div>
  );
};
