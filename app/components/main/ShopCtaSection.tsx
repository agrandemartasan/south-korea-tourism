import Image from "next/image";
import Button from "@/components/Button";
import { getTranslations } from "next-intl/server";

export default async function ShopCtaSection() {
  const t = await getTranslations('home.shopCta');
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/media/images/pc_2.webp"
        alt="Peças de cerâmica e artesanato coreano"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-inkstone/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6 px-6 lg:px-[3%] py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        {/* Title */}
        <div className="lg:flex-1">
          <h2 className="font-heading text-heading-lg text-harvest">
            {t('headingLine1')}
            <br />
            {t('headingLine2')}
          </h2>
        </div>

        {/* Description + CTA */}
        <div className="lg:flex-1">
          <p className="font-body text-body-lg text-porcelain mb-6">
            {t('description')}
          </p>
          <Button variant="accent" href="/shop">
            {t('button')}
          </Button>
        </div>
      </div>
    </section>
  );
}
