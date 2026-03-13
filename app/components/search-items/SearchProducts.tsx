import Image from "next/image";
type Product = {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
}
type SearchProductProps = {
    item: Product;
}
export const SearchProducts = ({item}: SearchProductProps) => {
  return (
    <div
      key={item.id}
      className="w-full flex flex-col justify-center gap-4 mt-2 bg-gray-100 
        rounded-md cursor-pointer py-2 hover:bg-gray-200 transition-colors duration-300"
    >
      <div className="w-full h-20 flex justify-start items-center gap-3">
        <div className="w-20 h-full">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={100}
            height={100}
            className="object-fill"
          />
        </div>
        <div className="w-25 h-full flex-1">
          <h1 className="text-sm font-bold">{item.title}</h1>
          <p className=" w-full truncate text-sm font-light">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};
