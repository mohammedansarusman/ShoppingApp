"use client";
import { useProductDetails } from "@/app/hooks/useProductDetails";
import { SingleProductImages } from "./SingleProductImages";
import { ProductDescription } from "./ProductDescription";
import { LoadingSingleproduct } from "./LoadingSingleproduct";
import { ProductType } from "@/app/utils/types";
import { CartItem } from "@/app/utils/types";
import { useAppDispatch } from "@/app/store/hook";
import { addItem } from "@/app/store/cartSlice";
import { addQuantity } from "@/app/store/cartSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ProductIdType = {
  productId: string;
};

export const SingleProduct = ({ productId }: ProductIdType) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data, error, isLoading } = useProductDetails(productId);
  
  if (data) {
    const product = data;
    const existing = localStorage.getItem("recentlyViewed");
    let items: ProductType[] = existing ? JSON.parse(existing) : [];
    // remove duplicate if already exists
    const filtered: ProductType[] = items.filter(
      (item) => item.id !== product.id,
    );
    // add new item at the beginning
    const updatedItems = [product, ...filtered];
    // store only last 5 items
    localStorage.setItem(
      "recentlyViewed",
      JSON.stringify(updatedItems.slice(0, 10)),
    );
  }
  const handleProductClick = (item: CartItem) => {
    dispatch(addItem({ ...item, units: 1 })); // add items in to cart ( state )
    dispatch(addQuantity(1)); // update cart items quantity ( state)
    toast.success(`${item.title} added to basket`, {
      position: "top-right",
      className: "!bg-pink-500 !text-white",
    });
    const timer = setTimeout(() => {
      router.push("/basket");
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div className="">
      {isLoading && <LoadingSingleproduct />}
      {/* Image Carousel */}
      {data && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:px-8">
          <div>
            <SingleProductImages image={data?.images} />
          </div>
          <div className="flex flex-col justify-start md:pt-10">
            <ProductDescription description={data} />
            <div className="w-full flex justify-center items-center py-5">
              <button
                className="w-50 h-10 bg-sky-600 text-white rounded-md "
                onClick={() => handleProductClick(data)}
              >
                {" "}
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
