import { Star } from "lucide-react";

export const Rating = ({ rating }: { rating: number }) => {
  const fullStar = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 ? true : false;
  const emptystar = 5 - fullStar - (hasHalfStar ? 1 : 0);
  return (
    <div className="flex justify-start items-center pl-2">
      {[...Array(fullStar)].map((_, index) => (
        <Star className="fill-pink-500 stroke-0" size={15} />
      ))}
      {hasHalfStar && <Star className="fill-pink-300 stroke-0" size={15} />}
      {[...Array(emptystar)].map((_, index) => (
        <Star className="fill-gray-300 stroke-0" size={15}/>
      ))}
      <p className="text-sm font-semibold ml-2">{rating}</p>
      <p></p>
    </div>
  );
};
