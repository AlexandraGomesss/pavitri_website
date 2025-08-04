import { HTMLAttributes } from "react";

type CardContentProps = HTMLAttributes<HTMLDivElement>;

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-2xl border-moss_green/30 border border-shadow-xl ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: CardContentProps) {
  return <div className={`p-4 ${className}`} {...props} />;
}
