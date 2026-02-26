import Image from "next/image";
import Button from "@/components/Button";
import { getTranslations } from "next-intl/server";

export default async function PlanHeroSection() {
  const t = await getTranslations('plan.hero');
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/images/seoul-korea.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-inkstone/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 lg:px-[3%] py-32 text-center">
        <h1 className="font-heading text-heading-xl text-harvest mb-6">
          {t('heading')}
        </h1>

        <p className="font-body text-body-xl text-porcelain mb-8 max-w-2xl">
          {t('subheading')}
        </p>

        {/* Button Group */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button variant="primary" href="#">
            {t('ctaCreate')}
          </Button>
          <Button variant="secondary" href="#etiqueta">
            {t('ctaEtiquette')}
          </Button>
        </div>
      </div>
    </section>
  );
}
