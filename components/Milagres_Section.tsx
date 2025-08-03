import Image from "next/image";

export default function Milagres_Section() {
  return (
    <section
      id="milagres_section"
      className=" h-[50vh] relative isolate flex flex-col justify-between rounded-xl overflow-hidden px-10 mx-48 text-cloud_white"
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
      <div className="absolute inset-0 bg-gradient-to-b from-forest-shadow/80 to-transparent" />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-12">
        {/* Bloco de texto no topo */}
        <div className="max-w-md text-left pt-8 md:pt-12">
          <p className="text-md md:text-lg tracking-widest uppercase text-sage-mist mb-1">
            APRENDE A SUBIR A VIBRAÇÃO E TRANSFORMA A TUA VIDA
          </p>
          <p className="text-base md:text-lg font-medium text-sky-blue mb-2">
            Programa de Manifestação Energética
          </p>
          <h1 className="mt-36 text-4xl md:text-5xl lg:text-6xl font-extrabold text-rose_quartz">
            Os&nbsp;Milagres&nbsp;Acontecem
          </h1>
        </div>

        {/* Bloco de CTA no fundo, alinhado à esquerda */}
        <div className="pb-16 md:pb-24">
          <a
            href="#detalhes"
            className="inline-block bg-moss_green text-cloud_white px-12 py-5 text-xl md:text-2xl font-semibold rounded-full shadow-lg transition-colors duration-300 ease-out
             hover:bg-forest_shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose_quartz/70"
            aria-label="Descobre o Teu Milagre"
          >
            Descobre o Teu Milagre
          </a>
        </div>
      </div>
    </section>
  );
}
