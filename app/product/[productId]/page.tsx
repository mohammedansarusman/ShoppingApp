import { SingleProductProps } from "@/app/utils/types";
import { SingleProduct } from "@/app/components/Product/SingleProduct";
export default async function ProductDetailsPage({ params }: SingleProductProps) {
  const { productId } = await params;
  return (
    <div className="mt-20">
      {productId && <SingleProduct productId = {productId}/>}
    </div>
  );
}
