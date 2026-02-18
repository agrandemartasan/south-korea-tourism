import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "./Icons";
import { articles, Article } from "../data/inspirationData";
import SectionHeader from "./SectionHeader";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col">
      {/* Card Image */}
      <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-4">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* Category Badge */}
      <span className="inline-block w-fit px-3 py-1 bg-crimson text-porcelain font-body text-body-sm rounded mb-3">
        {article.category}
      </span>

      {/* Title */}
      <h3 className="font-body text-heading-sm font-semibold text-crimson mb-2">
        {article.title}
      </h3>

      {/* Description */}
      <p className="font-body text-body-md text-porcelain mb-4">
        {article.description}
      </p>

      {/* Read More Link */}
      <Link
        href={article.href}
        className="inline-flex items-center gap-1 font-body text-body-md text-porcelain hover:text-harvest transition-colors"
      >
        Ler mais
        <ChevronRightIcon />
      </Link>
    </article>
  );
}

export default function InspirationSection() {
  return (
    <section className="bg-inkstone">
      <div className="px-6 lg:px-[3%] py-16 lg:py-24">
        <SectionHeader
          title="Inspira a tua próxima aventura"
          description="Histórias, guias e ideias para te ajudares a planear experiências inesquecíveis."
          centered={false}
        />

        {/* Article Cards */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
