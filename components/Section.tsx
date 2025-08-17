import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  bg?: "cloud" | "clay" | "sage" | "none";
  children: ReactNode;
  className?: string;
}

const BG_MAP = {
  cloud: "bg-cloud_white",
  clay: "bg-clay_beige",
  sage: "bg-sage_mist",
  none: "",
};

export default function Section({
  id,
  bg = "none",
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${BG_MAP[bg]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-12 md:py-16 flex flex-col items-center justify-center gap-12">
        {children}
      </div>
    </section>
  );
}
