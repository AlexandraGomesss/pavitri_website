import Image from "next/image";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
}

export function HeroBanner({
  title,
  subtitle,
  cta,
  imageSrc,
  imageAlt,
}: HeroBannerProps) {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="absolute inset-0 object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-forest_shadow/70 via-forest_shadow/30 to-transparent" />
      <div className="relative z-10 px-6 md:px-10 py-16 md:py-24 text-cloud_white">
        {subtitle && (
          <p className="uppercase tracking-widest text-sky_blue/90 text-sm md:text-base mb-2">
            {subtitle}
          </p>
        )}
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl leading-tight text-rose_quartz drop-shadow">
          {title}
        </h1>
        {cta && (
          <a
            href={cta.href}
            className="mt-6 inline-block rounded-full bg-moss_green px-8 py-3 text-cloud_white font-semibold shadow-lg transition-colors hover:bg-forest_shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose_quartz/60"
          >
            {cta.label}
          </a>
        )}
      </div>
    </div>
  );
}
