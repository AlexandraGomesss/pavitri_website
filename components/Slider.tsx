import React, { useRef } from "react";
import Image from "next/image";

interface Product {
  id: string | number;
  image: string;
  title: string;
  summary: string;
}

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollNext = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-visible">
      {/* Slider Controls fora dos cartões */}
      <button
        onClick={scrollPrev}
        type="button"
        aria-label="Anterior"
        className="absolute top-1/2 -left-4 transform -translate-x-full -translate-y-1/2 z-20 bg-cloud_white/30 hover:bg-cloud_white/50 text-stone_grey p-2 rounded-full text-2xl "
      >
        ❮
      </button>
      <button
        onClick={scrollNext}
        type="button"
        aria-label="Próximo"
        className="absolute top-1/2 -right-4 transform translate-x-full -translate-y-1/2 z-20 bg-cloud_white/30 hover:bg-cloud_white/50 text-stone_grey p-2 rounded-full text-2xl"
      >
        ❯
      </button>

      {/* Slider Container sem barra de scroll e com padding */}
      <div
        ref={containerRef}
        className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory gap-6 px-6"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="snap-start flex-shrink-0 basis-1/3 bg-clay_beige rounded-2xl shadow-lg p-6 flex flex-col"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={250}
                className="object-cover w-full h-48"
              />
            </div>
            <h3 className="text-stone_grey font-heading text-xl mb-2">
              {product.title}
            </h3>
            <p className="text-stone_grey flex-grow">{product.summary}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="bg-moss_green text-cloud_white font-semibold px-4 py-2 rounded-lg hover:bg-forest_shadow transition"
                type="button"
              >
                Saber Mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
