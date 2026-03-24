"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";


type ImageProps = {
  image: string[];
};

export const SingleProductImages = ({ image }: ImageProps) => {
  // embla events -  select, scroll, init and reInit
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({delay: 3000})]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  useEffect(()=>{
    if(!emblaApi) return;
    const onSelect = () =>{
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    emblaApi.on('select',onSelect);
    onSelect();
    return ()=>{
      emblaApi.off('select',onSelect);
    }
  },[emblaApi])
  
  return (
    <div className="w-full flex flex-col justify-center items-center py-10 px-2">
      <div className="w-full h-80 bg-gray-100 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {image?.map((img: string) => (
            <div
              className="min-w-full h-full flex justify-center items-center"
              key={img}
            >
              <Image
                key={img}
                src={img}
                alt="pic"
                width={1000}
                height={1000}
                className="min-w-full h-full object-contain"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
      {/* buttons */}
      <div className="flex justify-between px-4  w-full">
        <div className="flex">
          <button onClick={scrollPrev} className="text-pink-400 hover:text-pink-500">◀</button>
          <button onClick={scrollNext} className="text-pink-400 hover:text-pink-500">▶</button>
        </div>
        <div className="flex items-center gap-1">
          {image?.map((_, index) => (
            <button
              key={index}
              onClick={()=>emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-pink-500" : "bg-gray-300"}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};
