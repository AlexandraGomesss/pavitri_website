import Section from "@/components/Section";
import { HeroBanner } from "@/components/HeroBanner";
import { Card, CardBody, CardMedia, Badge, CTAButton } from "@/components/Card";
import { PageHead } from "@/components/PageHead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const products = [
  {
    title: "Liberta-te e Brilha",
    tag: "Equilíbrio Emocional",
    desc: "Programa online com ferramentas práticas para elevar a vibração, gerir emoções e cultivar paz interior.",
    image: "/images/libertate-e-brilha.webp",
    href: "/Produtos/milagres-acontecem",
  },
  {
    title: "Meditações de Luz - Pack",
    tag: "Áudios guiados",
    desc: "Coleção de meditações gravadas para serenidade, vitalidade e limpeza energética.",
    image: "/images/produtos/meditacoes-pack.jpg",
    href: "/checkout/meditacoes-pack",
  },
];

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-cloud_white text-stone_grey font-body">
      <NavBar />
      <PageHead
        title="Cursos e Produtos Digitais"
        description="Cursos online, meditações gravadas e guias práticos para a tua jornada de cura e autoconhecimento."
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8 py-6 md:py-10">
        <HeroBanner
          title="Cursos e Produtos Digitais"
          subtitle="Aprende ao teu ritmo, com leveza e clareza"
          imageSrc="/images/cursos_e_produtos_digitais_cut.webp"
          imageAlt="Mar sereno com névoa ao amanhecer"
        />
      </div>

      <Section id="lista" bg="clay">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-moss_green text-center">
              Escolhe o teu caminho
            </h2>
            <p className="mt-2 text-stone_grey/80 max-w-7xl text-center">
              Todos os produtos foram pensados para apoiar a tua prática diária:
              conteúdos claros, linguagem simples e foco no essencial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-8 justify-center">
          {products.map((p) => (
            <Card key={p.title}>
              <CardMedia src={p.image} alt={p.title} />
              <CardBody>
                <div className="mb-3">
                  <Badge>{p.tag}</Badge>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-stone_grey">
                  {p.title}
                </h3>
                <p className="mt-2 text-stone_grey/80">{p.desc}</p>
                <div className="mt-5">
                  <CTAButton href={p.href}>Saber Mais</CTAButton>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="sage" className="">
        <div className="rounded-2xl bg-cloud_white/70 p-6 md:p-10 ring-1 ring-black/5">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-moss_green">
            Apoio & Garantia de Claridade
          </h3>
          <p className="mt-2 text-stone_grey/80 max-w-3xl">
            Tens acesso imediato após a compra. Incluímos guias simples e
            checklists para que consigas começar hoje, sem complicações.
          </p>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
