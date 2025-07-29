"use client";
import Carousel from "@/components/Caroussel";
import ProductSlider from "@/components/Slider";
import NavBar from "@/components/NavBar";

const slidesData = [
  {
    image: "/images/bg1-respiracao.webp",
    title: "RESPIRAÇÃO",
    subtitle: "Conecta-te com a",
  },
  {
    image: "/images/bg2-corpo.webp",
    title: "CORPO",
    subtitle: "Conecta-te com o",
  },
  {
    image: "/images/bg3-energia.webp",
    title: "ENERGIA",
    subtitle: "Conecta-te com a",
  },
];

const sliderData = [
  {
    id: 1,
    image: "/images/bg1-respiracao.webp",
    title: "Sessão de Respiração",
    summary:
      "Aprende técnicas de respiração profunda para reduzir o stress e aumentar a concentração.",
  },
  {
    id: 2,
    image: "/images/bg2-corpo.webp",
    title: "Yoga Suave",
    summary:
      "Uma prática suave de yoga para todos os níveis, focada em alongamentos e bem‑estardar.",
  },
  {
    id: 3,
    image: "/images/bg3-energia.webp",
    title: "Meditação Guiada",
    summary:
      "Sessão de meditação guiada para encontrar paz interior e clareza mental.",
  },
  {
    id: 4,
    image: "/images/bg1-respiracao.webp",
    title: "Mentoria",
    summary:
      "Sessão de mentoria personalizada para ajudar pessoas a alcançar o sucesso pessoal e profissional.",
  },
  {
    id: 5,
    image: "/images/bg2-corpo.webp",
    title: "Cursos Online",
    summary:
      "Aprenda habilidades para o sucesso pessoal e profissional com cursos online exclusivos.",
  },
];

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <NavBar />
      <Carousel slides={slidesData} />
      <div className="max-w-7xl mx-auto my-8">
        <ProductSlider products={sliderData} />
      </div>
    </div>
  );
}
