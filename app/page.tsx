import { CarouselItems } from "./components/home-page/CarouselItems";
import { TopPicks } from "./components/home-page/TopPicks";

// import { NavigationBar } from "./components/navigation/NavigationBar";
export default function Home() {
  return (
    <div className="bg-white w-full h-screen pt-20 text-black flex flex-col items-center">
      {/* Carousel */}
      <CarouselItems/>
      {/* Top picks */}
      <TopPicks/>
      {/* shop by category */}
      {/* limited stocks */}
      {/* Recently viewed */}


    </div>
  );
}
