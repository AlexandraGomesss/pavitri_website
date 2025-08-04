import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Sobre_Mim() {
  return (
    <div
      className="relative w-full h-screen 
    "
    >
      <div>
        <NavBar />
      </div>
      <section className="bg-cloud_white text-stone_grey font-body leading-relaxed">
        {/* HERO */}
        <div className="w-full bg-moss_green text-cloud_white py-12 md:py-16 text-center animate-fade-in">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-tight">
              Ana Filipa,
              <br />
              <span className="font-normal text-rose_quartz">
                também conhecida por Pavitri
              </span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl opacity-90">
              É com muito Amor e Alegria que ensino como todos nós podemos viver
              bem, em Paz, com Prazer e Alegria, com Saúde Física, com
              Equilíbrio Emocional e Serenidade Mental
            </p>
          </div>
        </div>

        {/* STORY */}
        <div className="bg-clay_beige py-16 md:py-20">
          <div className="container flex max-w-7xl mx-auto px-4 gap-10 md:gap-16 items-center justify-center">
            <div className="flex flex-col max-w-2xl gap-8">
              <h2 className="text-3xl md:text-4xl font-heading text-moss_green font-bold">
                Porquê Pavitri?
              </h2>
              <p className="font-semibold text-xl">
                Pavitri marcou o meu renascimento e libertação da doença do
                corpo físico.
              </p>
              <p>
                Pavitri é um nome de origem Indiana, que significa&nbsp;
                <em>Pureza Sagrada</em>, este nome simboliza a essência, a
                energia que sinto e canalizo durante a meditação e prática
                pessoal.
              </p>
              <p>
                O nome Pavitri foi-me atribuído pelo guia espiritual da Escola
                de Tantra Yoga e Meditação, durante a iniciação à meditação, em
                2005, na escola onde me iniciei como Professora em 2008.
              </p>
              <p>
                Honro as minhas Raízes, os nascimentos e renascimentos, que
                podemos viver numa só vida!
              </p>
            </div>

            <Image
              src="/images/sobremim1.webp"
              alt="Ana Filipa meditando junto ao mar"
              width={400}
              height={600}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* QUOTE */}
        <div className="bg-sage_mist py-12 md:py-16 text-center">
          <p className="text-2xl md:text-3xl font-heading italic text-forest_shadow leading-relaxed">
            A Natureza é o meu templo,
            <br />
            <span className="text-xl md:text-2xl font-normal">
              a minha Conexão, Ligação e Religião
            </span>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
