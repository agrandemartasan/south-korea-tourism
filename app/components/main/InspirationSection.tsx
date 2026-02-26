import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ChevronRightIcon } from "@/components/Icons";
import { articles, Article } from "@/data/inspirationData";
import SectionHeader from "@/components/SectionHeader";
import { getTranslations, getLocale } from "next-intl/server";
import { localize } from "@/utils/localize";
import type { Locale } from "@/i18n/routing";

interface ArticleCardProps {
  article: Article;
  readMoreLabel: string;
  locale: Locale;
}

function ArticleCard({ article, readMoreLabel, locale }: ArticleCardProps) {
  return (
    <article className="flex flex-col">
      {/* Card Image */}
      <div className="relative aspect-4/3 w-full rounded-lg overflow-hidden mb-4">
        <Image
          src={article.image}
          alt={localize(article.title, locale)}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* Category Badge */}
      <span className="inline-block w-fit px-3 py-1 bg-celestial text-porcelain font-body text-body-sm rounded mb-3">
        {localize(article.category, locale)}
      </span>

      {/* Title */}
      <h3 className="font-body text-heading-sm font-semibold text-crimson mb-2 lg:min-h-17">
        {localize(article.title, locale)}
      </h3>

      {/* Description */}
      <p className="font-body text-body-md text-porcelain mb-4 flex-1">
        {localize(article.description, locale)}
      </p>

      {/* Read More Link */}
      <Link
        href={article.href}
        className="inline-flex items-center gap-1 font-body text-body-md text-porcelain hover:text-harvest transition-colors"
      >
        {readMoreLabel}
        <ChevronRightIcon />
      </Link>
    </article>
  );
}

export default async function InspirationSection() {
  const t = await getTranslations('home.inspiration');
  const commonT = await getTranslations('common');
  const locale = await getLocale() as Locale;
  return (
    <section className="bg-inkstone">
      <div className="px-6 lg:px-[3%] py-16 lg:py-24">
        <SectionHeader
          title={t('heading')}
          description={t('description')}
          centered={false}
        />

        {/* Article Cards */}
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} readMoreLabel={commonT('readMore')} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
