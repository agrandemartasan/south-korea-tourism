import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps {
  variant: ButtonVariant;
  href: string;
  children: React.ReactNode;
  className?: string;
  tabIndex?: number;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-celestial/70 border-celestial text-porcelain hover:bg-celestial/90",
  secondary:
    "bg-porcelain/10 border-porcelain text-porcelain hover:bg-porcelain/25",
  accent:
    "bg-crimson/70 border-crimson text-porcelain hover:bg-crimson/90",
};

export default function Button({
  variant,
  href,
  children,
  className = "",
  tabIndex = 0,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full border px-8 py-3 font-body text-base font-normal transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-inkstone";

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      role="button"
      tabIndex={tabIndex}
    >
      {children}
    </Link>
  );
}
