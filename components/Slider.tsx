import React, { useRef, useEffect, useState } from "react";
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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const style = getComputedStyle(cardRef.current);
      const gap = parseInt(style.marginRight || "0"); // caso esteja com margin
      setCardWidth(rect.width + gap + 24); // 24px = gap-6 (1.5rem), ajuste se necessário
    }
  }, []);

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full overflow-visible font-body">
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

      <div
        ref={containerRef}
        className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory gap-6 p-6"
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={index === 0 ? cardRef : null}
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
