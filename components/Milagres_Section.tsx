import Image from "next/image";
import Link from "next/link";

export default function Milagres_Section() {
  return (
    <section
      id="milagres_section"
      className="h-[50vh] relative isolate flex flex-col justify-between rounded-xl overflow-hidden px-10 mx-48 text-cloud_white mb-16 font-body"
    >
      {/* Imagem de fundo com ajuste de brilho */}
      <Image
        src="/images/milagres.webp"
        alt="Praia serena ao amanhecer"
        fill
        priority
        className="absolute inset-0 object-cover filter brightness-75"
      />

      {/* Sobreposição gradient para contraste */}
      <div className="flex flex-col justify-between absolute inset-0 bg-gradient-to-b from-forest_shadow/80 to-transparent" />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-12 py-6 md:py-12">
        {/* Bloco de texto no topo */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-rose_quartz font-heading">
          Os&nbsp;Milagres
          <br />
          Acontecem
        </h1>
        <div className="flex flex-col max-w-md text-left">
          <p className="text-md md:text-lg tracking-widest uppercase text-sage_mist">
            {/* APRENDE A SUBIR A VIBRAÇÃO E TRANSFORMA A TUA VIDA */}
          </p>
          <p className="text-base md:text-lg font-medium text-sky_blue">
            Programa de Manifestação Energética
          </p>
        </div>

        {/* Bloco de CTA no fundo, alinhado à esquerda */}
        <div className="pb-8">
          <Link
            href="/Produtos/milagres-acontecem"
            className="inline-block bg-moss_green text-cloud_white px-12 py-5 text-xl md:text-2xl font-semibold rounded-lg shadow-lg transition-colors duration-300 ease-out
             hover:bg-forest_shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose_quartz/70"
            aria-label="Descobre o Teu Milagre"
          >
            Descobre o Teu Milagre
          </Link>
        </div>
      </div>
    </section>
  );
}
