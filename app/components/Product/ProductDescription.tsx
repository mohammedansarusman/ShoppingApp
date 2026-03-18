import { Rating } from "./Rating";

type Details = {
  brand: string;
  title?: string;
  category: string;
  description: string;
  rating: number;
  discountPercentage: number;
  price: number;
};
type DetailsProps = {
  description: Details;
};

export const ProductDescription = ({ description }: DetailsProps) => {
  const discount = description?.discountPercentage;
  const rate = description?.price;
  const discountedPrice = rate - rate * (discount / 100);
  const rating = description?.rating;

  return (
    <div className="w-full">
      <div className="px-2 py-2 flex flex-col gap-2">
        <h4 className="text-sm font-semibold text-gray-500">
          {description?.category.toUpperCase()}
        </h4>
        <h3 className="text-md font-bold text-black">
          {description?.brand || description?.title}
        </h3>
        <p className="text-sm text-black font-light">
          {description?.description}
        </p>
      </div>
      {/* rating */}
      <Rating rating={rating} />
      <div className="flex justify-between items-center px-2 py-2">
        <p className="text-pink-600 text-base font-bold">{`AED ${Math.ceil(discountedPrice)}`}</p>
        <p className="text-sm line-through">{`AED ${Math.ceil(rate)}`}</p>
      </div>
    </div>
  );
};
