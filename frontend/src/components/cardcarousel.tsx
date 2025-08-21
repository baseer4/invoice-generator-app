
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "../assets/card/image1.png";
import img2 from "../assets/card/image2.png";
export function CardCarousel() {
  const images = [img1, img2];
  
  // Duplicate slides to simulate infinite scroll
  const slides = [...images, ...images, ...images]; // repeat 3x for smoothness

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  React.useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <div className="relative w-[35vw] h-[100px] md:h-[620px]">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((src, i) => (
            <div
              key={i}
              className="flex-[0_0_90%] mr-4 rounded-4xl overflow-hidden shadow-md h-full"
            >
              <img
                src={src}
                alt={`slide-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
