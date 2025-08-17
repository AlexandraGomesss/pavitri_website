import { services } from "@/data/catalog";
import {
  Breadcrumb,
  ItemHeader,
  ItemBody,
  InfoPanel,
  StickyCTA,
} from "@/components/ItemDetail";
import Section from "@/components/Section";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const dynamicParams = false; // only build the slugs we export
export const revalidate = 60; // ISR (optional)

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = services.find((x) => x.slug === params.slug);
  return {
    title: s ? `${s.title} | Pavitri` : "Serviço | Pavitri",
    description: s?.summary,
  };
}

export default function ServicoSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-cloud_white text-stone_grey font-body">
      <NavBar />
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-6 md:py-10 w-full">
        {/* <Breadcrumb
          items={[
            { href: "/", label: "Início" },
            { href: "/servicos", label: "Serviços" },
            { href: `#`, label: service.title },
          ]}
        /> */}
        <ItemHeader
          title={service.title}
          tag={service.tag}
          summary={service.summary}
          image={service.image}
        />
      </div>

      <ItemBody>
        {/* Main content */}
        <article className="lg:col-span-2 space-y-6 text-left">
          <Section bg="none" className="w-full p-0">
            <div className="rounded-2xl bg-cloud_white p-6 ring-1 ring-black/5">
              <h2 className="font-heading text-2xl font-bold text-moss_green">
                Como funciona
              </h2>
              <p className="mt-2 text-stone_grey/85">{service.summary}</p>
              {service.duration && (
                <p className="mt-3 text-stone_grey/70 text-sm">
                  <strong>Duração:</strong> {service.duration}
                </p>
              )}
            </div>
          </Section>
          <InfoPanel title="Inclui" items={service.includes} />
          <InfoPanel title="Destaques" items={service.highlights} />
        </article>

        {/* Sidebar CTA */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="rounded-2xl bg-rose_quartz/25 p-6 ring-1 ring-black/5">
            <h3 className="font-heading text-xl font-semibold text-stone_grey">
              Pronto para agendar?
            </h3>
            {service.duration && (
              <p className="mt-2 text-stone_grey/80">
                Sessão de {service.duration}
              </p>
            )}
          </div>
          <StickyCTA
            label="Agendar sessão"
            href={service.ctaHref}
            meta="Confirmas a data no calendário"
          />
        </aside>
      </ItemBody>
      <Footer />
    </main>
  );
}
