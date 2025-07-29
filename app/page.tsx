"use client";
import Carousel from "@/components/Caroussel";
import NavBar from "@/components/NavBar";

const slidesData = [
  {
    image: "/images/bg1-respiracao.webp",
    title: "RESPIRAÇÃO",
    subtitle: "Conecta-te com",
  },
  {
    image: "/images/bg2-corpo.webp",
    title: "CORPO",
    subtitle: "Conecta-te com",
  },
  {
    image: "/images/bg3-energia.webp",
    title: "ENERGIA",
    subtitle: "Conecta-te com",
  },
];

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <NavBar />
      <Carousel slides={slidesData} />
    </div>
  );
}
