export type ProductType = {
  id: number;
  title: string;
  brand: string;
  thumbnail: string;
  discountPercentage: number;
  price: number;
};
export type ProductCardProps = {
  products: ProductType[];
};
