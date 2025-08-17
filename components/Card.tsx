import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group rounded-2xl bg-cloud_white ring-1 ring-black/5 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}

export function CardMedia({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-t-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
}

export function CardBody({ children }: { children: ReactNode }) {
  return <div className="p-5 md:p-6">{children}</div>;
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sage_mist px-3 py-1 text-xs font-semibold text-forest_shadow">
      {children}
    </span>
  );
}

export function CTAButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-moss_green px-5 py-2.5 text-cloud_white font-semibold shadow-sm transition-colors hover:bg-forest_shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky_blue/60"
    >
      {children}
    </a>
  );
}
