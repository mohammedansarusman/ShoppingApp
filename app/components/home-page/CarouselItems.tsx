// parent  - main page.tsx
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const carouselImages = [
  "carouselImage1.webp",
  "carouselImage2.webp",
  "carouselImage3.webp",
  "carouselImage4.webp",
];
export const CarouselItems = () => {
  return (
    <Carousel className="w-7/8 h-60 sm:h-80 md:h-105 lg:h-110 xl:h-120 flex justify-center items-center mt-10">
      <CarouselContent className="">
        {carouselImages.map((item, index) => (
          <CarouselItem
            key={index}
            className="w-full full flex justify-center items-center md:h-105 lg:h-110 xl:h-120"
          >
            <Image
              src={`/${item}`}
              alt={`carousel${index}`}
              width={1000}
              height={1000}
              className="w-full h-full object-fill rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="top-1/2 -right-3 text-white bg-pink-500 hover:bg-pink-600 hover:text-white"/>
      <CarouselPrevious className="-left-3 top-1/2 text-white bg-pink-500 hover:bg-pink-600 hover:text-white" />

    </Carousel>
  );
};
