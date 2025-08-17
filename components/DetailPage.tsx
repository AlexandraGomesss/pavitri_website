import Image from "next/image";
import { Badge, CTAButton } from "@/components/Card";
import Section from "@/components/Section";
import { PageHead } from "@/components/PageHead";

interface DetailPageProps {
  type: "produto" | "servico";
  title: string;
  tag: string;
  desc: string;
  image: string;
  features?: string[];
  cta: { label: string; href: string };
}

export function DetailPage({
  type,
  title,
  tag,
  desc,
  image,
  features,
  cta,
}: DetailPageProps) {
  return (
    <main className="min-h-screen bg-cloud_white text-stone_grey font-body">
      <PageHead
        title={title}
        description={`${type === "produto" ? "Produto" : "Serviço"}: ${desc}`}
      />

      <Section bg="clay">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          <Badge>{tag}</Badge>
          <h1 className="mt-4 font-heading text-4xl md:text-5xl font-bold text-moss_green">
            {title}
          </h1>
          <p className="mt-4 text-stone_grey/80 text-lg">{desc}</p>

          {features && (
            <ul className="mt-6 space-y-2 text-left">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-2 w-2 rounded-full bg-sky_blue"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex justify-center">
            <CTAButton href={cta.href}>{cta.label}</CTAButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
