// components/ui/cta-button.tsx
import Link from "next/link";

type Props = {
  href: string;
  text: string;
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
};

const sizeMap = {
  sm: "text-sm px-3 py-2",
  md: "text-base px-4 py-2",
  lg: "text-lg px-5 py-3",
  xl: "text-xl px-6 py-4",
};

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export function CTAButton({ href, text, size = "md", rounded = "md" }: Props) {
  return (
    <Link
      href={href}
      className={`bg-moss_green text-cloud_white font-heading font-extrabold hover:bg-forest_shadow transition ${sizeMap[size]} ${roundedMap[rounded]}`}
    >
      {text}
    </Link>
  );
}
