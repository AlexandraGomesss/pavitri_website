"use client";
import Carousel from "@/components/Caroussel";
import ProductSlider from "@/components/Slider";
import NavBar from "@/components/NavBar";
import Milagres_Section from "@/components/Milagres_Section";
import Footer from "@/components/Footer";

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
    image: "/images/formacoes.webp",
    title: "Formações",
    summary:
      "Aprenda habilidades para o sucesso pessoal e profissional com aulas personalizadas.",
  },
  {
    id: 2,
    image: "/images/bg2-corpo.webp",
    title: "Cursos Online",
    summary:
      "Aprenda habilidades para o sucesso pessoal e profissional com cursos online exclusivos.",
  },
  {
    id: 3,
    image: "/images/bg3-energia.webp",
    title: "Meditação",
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
    title: "Massagens",
    summary:
      "Sessão de massagem guiada para ajudar pessoas a alcançar o sucesso pessoal e profissional.",
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
      <Milagres_Section />
      <Footer />
    </div>
  );
}
