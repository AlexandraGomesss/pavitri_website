import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // muda de slide a cada 5s
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover"
          />

          {/* Conteúdo sobreposto */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-10 sm:px-36 font-heading text-cloud_white">
            <h5 className="text-xl sm:text-4xl font-bold mb-4">
              {slide.subtitle}
            </h5>
            <h1 className="text-6xl sm:text-8xl font-semibold text-rose_quartz">
              {slide.title}
            </h1>
          </div>
        </div>
      ))}

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-cloud_white/30 hover:bg-cloud_white/50 text-stone_grey p-2 rounded-full"
        aria-label="Anterior"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-cloud_white/30 hover:bg-cloud_white/50 text-stone_grey p-2 rounded-full"
        aria-label="Próximo"
      >
        ❯
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-rose_quartz" : "bg-cloud_white/50"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
