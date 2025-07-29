import Image from "next/image";
import hero_banner from "@/app/images/DSC_1292webp_pag_principal.webp";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative w-full h-screen ">
      {/* Hero Banner */}
      <Image
        src={hero_banner}
        alt="Hero banner"
        fill
        priority
        className="object-cover"
      />

      <NavBar />
      {/* Content on top of the banner */}
      <div className="relative z-10 flex flex-col items-left justify-center h-full text-light_grey bg-black/20 p-36">
        <h5 className="text-xl sm:text-4xl font-bold mb-4">Conecta-te com a</h5>
        <h1 className="text-8xl sm:text-8xl mb-6 text-light_pink">
          RESPIRAÇÃO
        </h1>
      </div>
    </div>
  );
}
