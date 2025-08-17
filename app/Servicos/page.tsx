import Section from "@/components/Section";
import { HeroBanner } from "@/components/HeroBanner";
import { Card, CardBody, CardMedia, Badge, CTAButton } from "@/components/Card";
import { PageHead } from "@/components/PageHead";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Mentoria 1:1",
    tag: "Online",
    desc: "Acompanhamento personalizado para clarear emoções, elevar a vibração e criar rotinas que te sustentam.",
    image: "/images/servicos/mentoria.jpg",
    href: "/agendar/mentoria",
    features: [
      "Sessões de 60-75min",
      "Plano prático entre sessões",
      "Follow-up por email",
    ],
  },
  {
    title: "Reiki à Distância",
    tag: "Energia & Cura",
    desc: "Sessão energética não presencial para harmonizar corpo, emoções e mente. Ideal quando precisas de suporte suave.",
    image: "/images/servicos/reiki-distancia.jpg",
    href: "/agendar/reiki-distancia",
    features: [
      "30-45min",
      "Intenção definida contigo",
      "Mensagem de integração",
    ],
  },
  {
    title: "Reiki Presencial",
    tag: "Terapia Energética",
    desc: "Sessão com toque suave para relaxamento profundo e equilíbrio do fluxo energético.",
    image: "/images/servicos/reiki-presencial.jpg",
    href: "/agendar/reiki-presencial",
    features: ["60min", "Ambiente tranquilo", "Recomendações pós-sessão"],
  },
  {
    title: "Massagem Terapêutica",
    tag: "Presencial",
    desc: "Técnicas de relaxamento e libertação de tensão muscular, com enfoque no teu bem-estar global.",
    image: "/images/servicos/massagem.jpg",
    href: "/agendar/massagem",
    features: ["60 ou 90min", "Óleos naturais", "Ambiente acolhedor"],
  },
  {
    title: "Meditação Guiada (ao vivo)",
    tag: "Sessão em grupo",
    desc: "Prática guiada para serenidade, respiração e presença. Pode ser online ou presencial.",
    image: "/images/servicos/meditacao-ao-vivo.jpg",
    href: "/agendar/meditacao",
    features: ["45-60min", "Respiração & visualização", "Atmosfera segura"],
  },
];

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-cloud_white text-stone_grey font-body">
      <NavBar />
      <PageHead
        title="Serviços"
        description="Mentoria, Reiki, Massagens e Meditação ao vivo — serviços para te guiarem no caminho da cura e felicidade."
      />

      <div className="mx-auto max-w-7xl px-6 md:px-8 py-6 md:py-10">
        <HeroBanner
          title="Serviços que te acompanham"
          subtitle="Experiências com presença, cuidado e atenção"
          imageSrc="/images/servicos_cut.webp"
          imageAlt="Falésias com mar ao fundo"
        />
      </div>

      <Section id="lista-servicos" bg="clay">
        <div className="mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-moss_green">
            Escolhe o apoio que precisas agora
          </h2>
          <p className="mt-2 text-stone_grey/80 max-w-3xl">
            Cada serviço foi desenhado para te trazer calma, clareza e energia,
            respeitando o teu ritmo e a tua realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s) => (
            <Card key={s.title}>
              <CardMedia src={s.image} alt={s.title} />
              <CardBody>
                <div className="mb-3">
                  <Badge>{s.tag}</Badge>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-stone_grey">
                  {s.title}
                </h3>
                <p className="mt-2 text-stone_grey/80">{s.desc}</p>
                {s.features && (
                  <ul className="mt-4 space-y-1 text-stone_grey/80">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span
                          aria-hidden
                          className="mt-1 inline-block h-2 w-2 rounded-full bg-sky_blue"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-5">
                  <CTAButton href={s.href}>Agendar</CTAButton>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      <Section bg="sage">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl bg-cloud_white/70 p-6 md:p-8 ring-1 ring-black/5">
            <h3 className="font-heading text-2xl font-bold text-moss_green">
              Como funciona o agendamento
            </h3>
            <ol className="mt-3 list-decimal pl-5 space-y-1 text-stone_grey/80">
              <li>Escolhe o serviço e a modalidade (online/presencial).</li>
              <li>Seleciona a data disponível no calendário.</li>
              <li>Recebe por email os detalhes e orientações.</li>
            </ol>
          </div>
          <div className="rounded-2xl bg-rose_quartz/25 p-6 md:p-8 ring-1 ring-black/5">
            <h4 className="font-heading text-xl font-semibold text-stone_grey">
              Notas importantes
            </h4>
            <p className="mt-2 text-stone_grey/80">
              Reiki à distância é um <strong>serviço</strong> não presencial. Em
              caso de dúvidas, fala comigo — respondo com carinho e clareza.
            </p>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}
