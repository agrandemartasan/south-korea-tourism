import Image from "next/image";
import Button from "@/components/Button";
import { getTranslations } from "next-intl/server";

export default async function HeroSection() {
  const t = await getTranslations('home.hero');

  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/images/hero-section-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-inkstone/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-start justify-center px-6 lg:px-[3%] py-32">
        {/* Heading Section */}
        <div className="space-y-6 lg:w-[70%]">
          <h1 className="font-heading text-heading-xl text-harvest">
            {t('heading')}
          </h1>
        </div>

        {/* Subheading and Buttons Section */}
        <div className="mt-6 space-y-6 lg:ml-auto lg:mt-16 lg:w-[50%] lg:text-right">
          <p className="font-body text-body-xl text-porcelain">
            {t('subheading')}
          </p>

          {/* Button Group */}
          <div className="flex flex-col gap-4 pt-4 xs:flex-row lg:justify-end">
            <Button variant="primary" href="/plan">
              {t('ctaPlan')}
            </Button>
            <Button variant="secondary" href="#explorar">
              {t('ctaExplore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
