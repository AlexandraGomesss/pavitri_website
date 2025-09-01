import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Sobre_Mim() {
  return (
    <div
      className="relative w-full h-screen font-body
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
      <section className="bg-cloud_white text-stone_grey py-16 md:py-20 font-body">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-moss_green text-center mb-12">
            Formações E Experiências
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Texto à Esquerda */}
            <div className="space-y-6 text-sm md:text-base">
              <p>
                O que ensino, as terapias, as meditações, as aulas e cursos
                online e presenciais, são fruto de todo o conhecimento,
                experiências, vivências e aprendizagens que me ajudaram a
                encontrar uma vida onde me sinto{" "}
                <strong>Feliz, Livre, repleta de Amor, em Paz</strong> e com
                muita conexão com a natureza, vivo onde <em>Amo Viver</em>,
                trabalho no que mais <em>Amo</em> fazer todos os dias, tenho
                tudo aquilo que mais valorizo!
              </p>
              <p>
                Como cheguei aqui? É o que partilho com vocês através do
                trabalho que desenvolvo: aulas, cursos, meditações...
              </p>
              <p>
                Recebemos o que está de acordo connosco, com a vibração onde
                estamos. Com a qualidade das emoções que vivemos, as escolhas, e
                o que mais valorizamos na vida.
              </p>
              <p>
                Quando desbloqueias e alinhas a vibração com a energia do
                <em>divino em ti</em>, vives o <strong>Salto Quântico</strong>,
                ou seja, uma mudança de realidade mais adequada à nova dimensão
                energética a que ascendeste!
              </p>
            </div>

            {/* Cartão de Certificação */}
            <div className="bg-sage_mist rounded-2xl p-6 flex flex-col gap-6 items-center text-center shadow-lg">
              <p className="font-semibold font-heading text-xl">
                É com muito Amor e Alegria que ensino as experiências, que
                aplico na minha vida, no meu corpo e energia, os conhecimentos,
                os estudos, as formações e certificações, que fui adquirindo
                desde 2003.
              </p>

              <div>
                <Image
                  src="/images/certificado.webp"
                  alt="Filipa Pavitri"
                  width={350}
                  height={800}
                  className="rounded-2xl"
                />
              </div>
            </div>

            {/* Texto à Direita */}
            <div className="flex flex-col gap-8 text-sm md:text-base">
              <div className="flex flex-col gap-1">
                <h4 className="font-heading text-lg font-semibold text-moss_green">
                  Terapias Energéticas e Emocionais
                </h4>
                <p className="mt-2">
                  <strong>Mestra de Reiki Nível III</strong>
                  <br /> Aplico cura energética, cirurgia energética, equilibrio
                  dos centros energéticos, limpeza energética, envio de Reiki à
                  distância e direta, limpeza da energia karmica do passado,
                  presente e futuro.
                </p>
                <p className="mt-2">
                  <strong>Libertação Emocional:</strong>
                  <br />
                  Especializada em Libertação Emocional, pela EFT Center - Gary
                  Craig, Founder, nivel avançado II, e em outros métodos de
                  libertação emocional como o The Work, Método Sedona.
                </p>
                <p className="mt-2">
                  <strong>AUTOCURA:</strong>
                  <br />
                  Terapeuta de AUTOCURA certificada pela Alexandra Solnado, com
                  a Luz de Jesus, facilito e ensino como podes desenvolver a tua
                  meditação e métodos de canalização para desenvolveres a tua
                  prática pessoal de Cura, limpeza energética e ligação à
                  energia de Jesus.
                  <br />
                  Estudo e acompanho a Alexandra desde 2013, onde tive
                  oportunidade de realizar os 5 niveis de formação presencial em
                  Oeiras, em 2015 e eт 2022 participei no CONTACT com a energia
                  de Jesus, facilitados pela Alexandra Solnado, os quais me
                  ajudaram a alinhar e consolidar mais com a energia Divina de
                  Jesus.
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="font-heading text-lg font-semibold text-moss_green">
                  Meditação e Yoga
                </h4>
                <p>
                  Iniciei a meditação em 2003 na Brahma Kumaris (Índia,
                  2005-2006). Em 2008 formei-me em Tantra Yoga e Meditação
                  (Ananda Marga) e em 2010 em Yoga Integral, certificada pela
                  Yoga Alliance. Hoje&nbsp;
                  <strong>ensino Yoga Terapêutico e Tantra Yoga,</strong>
                  integrando ainda práticas de Chi Kung e Kung Fu para{" "}
                  <strong>alinhar a postura e energia do corpo.</strong>
                </p>
              </div>

              <div>
                <h4 className="font-heading text-lg font-semibold text-moss_green">
                  E Mais...
                </h4>
                <p className="mt-2">
                  Foi adquirindo formação em várias áreas como Alimentação
                  Alcalina, Medicina Ayurveda, Massagem Ayurveda, Massagem
                  SacroCraniana, Massagem Tui Ná, Reflexologia, Chi Kung, Kung
                  Fu, Reiki, entre outras técnicas que trabalham o corpo
                  energeticamente. Sou também Facilitadora do Despertar e
                  Ativadora da Nova Era pelo método da Inês Gaya, a quem honro
                  pelas aprendizagens ligadas aos círculos femininos e ao
                  sagrado feminino e muitas mais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA - Quer saber mais? */}
      <section className="relative w-full h-80 md:h-96">
        <div className="absolute inset-0">
          <Image
            src="/images/abracopraia.webp"
            alt="Ana Filipa abraçondo o mar"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-md uppercase tracking-widest text-cloud_white mb-2">
            Honra a Natureza e as tuas Raízes
          </p>
          <h3 className="text-3xl md:text-4xl font-heading text-cloud_white mb-4">
            Queres Saber mais?
          </h3>
          <button className="px-6 py-2 border border-cloud_white text-cloud_white text-lg md:text-xl font-heading font-extrabold rounded-md hover:bg-cloud_white hover:text-moss_green transition">
            <Link href="/Contacto">Contactar</Link>
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
