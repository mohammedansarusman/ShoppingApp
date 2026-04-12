import { CategoryList } from "./CategoryList";

export const CategoryFilter = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <h1 className="font-semibold text-gray-800 pl-4">Categories</h1>
      <CategoryList/>
    </div>
  );
};
