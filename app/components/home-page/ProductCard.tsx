import Image from "next/image";

type ProductType = {
    id: number;
    title: string;
    brand: string;
    thumbnail: string;
    discountPercentage: number;
    price: number;
};
type ProductCardProps = {
    products: ProductType[];
}

export const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <div className="flex w-full h-80">
      <div className="flex overflow-scroll gap-4 px-2 py-2">
        {products.map((item) => (
          <div
            className="w-50 h-full shrink-0 text-gray-600 flex flex-col gap-1"
            key={item?.id}
          >
            <div className="w-full h-60 border border-gray-200 rounded-xl relative">
              <Image
                src={item.thumbnail}
                alt="item-pic"
                width={1000}
                height={1000}
                className="w-full h-full "
              />
              <div
                className="absolute top-0 w-20 bg-pink-600 h-5 
                      rounded-tl-xl rounded-br-xl text-xs text-white font-semibold flex justify-center items-center"
              >
                <p>{`${Math.round(item?.discountPercentage)}% off`}</p>
              </div>
            </div>
            <p className="font-light text-sm">
              {item?.brand ? item.brand : item?.title}
            </p>
            <p className="font-semibold text-sm truncate">{item?.title}</p>
            <div className="w-full h-10 flex justify-between items-center">
              <p className="text-pink-600 text-base font-bold">{`AED ${Math.round(item?.price - item?.price * (item?.discountPercentage / 100))}`}</p>
              <p className="text-sm line-through">{`AED ${item?.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
