interface SectionHeaderProps {
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  title,
  description,
  centered = true,
  className = ""
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="font-heading text-3xl leading-tight text-harvest mb-4 lg:text-5xl">
        {title}
      </h2>
      <p className="font-body text-base text-porcelain lg:text-lg">
        {description}
      </p>
    </div>
  );
}
