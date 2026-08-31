import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  variant?: "ink" | "cream";
  className?: string;
  preload?: boolean;
};

const files = {
  ink: { src: "/brand/revenueflow-ink.png", width: 973, height: 191 },
  cream: { src: "/brand/revenueflow-cream.png", width: 975, height: 193 },
} as const;

export function BrandLogo({ variant = "ink", className = "h-[22px]", preload = false }: Props) {
  const file = files[variant];
  return (
    <Image
      src={file.src}
      alt={site.name}
      width={file.width}
      height={file.height}
      preload={preload}
      className={`w-auto object-contain object-left ${className}`}
    />
  );
}
