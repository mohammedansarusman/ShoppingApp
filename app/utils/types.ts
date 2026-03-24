export type ProductType = {
  id: number;
  title: string;
  brand: string;
  thumbnail: string;
  discountPercentage: number;
  price: number;
  rating?:number;
};
export type ProductCardProps = {
  products: ProductType[];
};
export type SingleProductProps = {
  params: {
    productId: string;
  };
};

export type CartItem = {
  title: string;
  brand: string;
  id? : number;
  price: number;
  discountPercentage: number;
 rating?: number;  
}
