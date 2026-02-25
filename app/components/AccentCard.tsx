interface AccentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AccentCard({ children, className = "" }: AccentCardProps) {
  return (
    <article className={`bg-celestial/20 border-l-2 border-harvest rounded-lg p-6 lg:p-8 ${className}`}>
      {children}
    </article>
  );
}
