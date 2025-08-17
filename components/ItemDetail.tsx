import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";

export function Breadcrumb({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav aria-label="migalhas" className="mb-6 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-stone_grey/70">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span className="opacity-50">/</span>}
            <Link
              href={it.href}
              className="hover:underline hover:text-moss_green"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ItemHeader({
  title,
  tag,
  summary,
  image,
}: {
  title: string;
  tag: string;
  summary: string;
  image: string;
}) {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl">
      <div className="relative h-[320px] md:h-[420px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest_shadow/70 via-forest_shadow/20 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 md:px-10 pb-8 text-cloud_white">
          <span className="inline-flex items-center rounded-full bg-rose_quartz/70 px-3 py-1 text-xs font-semibold text-stone_grey">
            {tag}
          </span>
          <h1 className="mt-3 font-heading text-4xl md:text-5xl font-extrabold text-cloud_white drop-shadow">
            {title}
          </h1>
          <p className="mt-2 max-w-3xl text-cloud_white/90">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export function ItemBody({ children }: { children: React.ReactNode }) {
  return (
    <Section bg="clay">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {children}
      </div>
    </Section>
  );
}

export function InfoPanel({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[] | undefined;
  icon?: React.ReactNode;
}) {
  if (!items || items.length === 0) return null;
  return (
    <div className="rounded-2xl bg-cloud_white p-6 ring-1 ring-black/5 text-left">
      <h3 className="font-heading text-xl font-bold text-moss_green flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <ul className="mt-3 space-y-1 text-stone_grey/85">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-2">
            <span
              aria-hidden
              className="mt-2 inline-block h-2 w-2 rounded-full bg-sky_blue"
            />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function StickyCTA({
  label,
  href,
  meta,
}: {
  label: string;
  href: string;
  meta?: string;
}) {
  return (
    <div className="rounded-2xl bg-sage_mist/60 p-6 ring-1 ring-black/5 text-left">
      {meta && <p className="text-stone_grey/70 text-sm">{meta}</p>}
      <a
        href={href}
        className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-moss_green px-6 py-3 text-cloud_white font-semibold shadow-sm transition-colors hover:bg-forest_shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose_quartz/60"
      >
        {label}
      </a>
      <p className="mt-2 text-xs text-stone_grey/60">
        Pagamento seguro. Recebes email imediato com os próximos passos.
      </p>
    </div>
  );
}
