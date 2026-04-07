import Link from "next/link";
export default function NotFound() {
  return (
    <div className="w-full h-screen bg-white pt-20 flex flex-col items-center justify-center">
      <p className="text-lg mt-3">Page not found</p>
      <Link href="/" className="px-3 py-2 bg-pink-500 text-white rounded-lg">
        Go back to Home
      </Link>
    </div>
  );
}
