import { products } from "@/data/catalog";
import {
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
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((x) => x.slug === params.slug);
  return {
    title: p ? `${p.title} | Pavitri` : "Produto | Pavitri",
    description: p?.summary,
  };
}

export default function ProdutoSlugPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <main className="min-h-screen bg-cloud_white text-stone_grey font-body">
      <NavBar />
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-6 md:py-10 w-full">
        {/* <Breadcrumb
          items={[
            { href: "/", label: "Início" },
            { href: "/produtos", label: "Produtos" },
            { href: `#`, label: product.title },
          ]}
        /> */}
        <ItemHeader
          title={product.title}
          tag={product.tag}
          summary={product.summary}
          image={product.image}
        />
      </div>

      <ItemBody>
        {/* Main content */}
        <article className="lg:col-span-2 space-y-6 text-left">
          <Section bg="none" className="w-full p-0">
            <div className="rounded-2xl bg-cloud_white p-6 ring-1 ring-black/5">
              <h2 className="font-heading text-2xl font-bold text-moss_green">
                O que vais encontrar
              </h2>
              <p className="mt-2 text-stone_grey/85">{product.summary}</p>
            </div>
          </Section>
          <InfoPanel title="Inclui" items={product.includes} />
          <InfoPanel title="Destaques" items={product.highlights} />
        </article>

        {/* Sidebar CTA */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="rounded-2xl bg-rose_quartz/25 p-6 ring-1 ring-black/5">
            <h3 className="font-heading text-xl font-semibold text-stone_grey">
              Informação
            </h3>
            {product.price && (
              <p className="mt-2 text-2xl font-extrabold text-stone_grey">
                {product.price}
              </p>
            )}
          </div>
          <StickyCTA
            label="Comprar agora"
            href={product.ctaHref}
            meta="Acesso imediato"
          />
        </aside>
      </ItemBody>
      <Footer />
    </main>
  );
}
