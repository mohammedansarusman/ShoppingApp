import { DisplaySearchProducts } from "@/app/components/search-items/DisplaySearchProducts";
export default async function SearchProducts({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const { query } = await searchParams;
  return (
    <div className="w-full h-screen bg-white pt-20">
      <h1>Producs</h1>
      <DisplaySearchProducts query={query} />
    </div>
  );
}
