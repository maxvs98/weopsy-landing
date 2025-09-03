import Image from "next/image";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/button";

import BRANDED_CARD from "./assets/branded-card.webp";
import CARD_IMAGE from "./assets/card.webp";
import CARD_DARK_IMAGE from "./assets/card-dark.webp";

interface HowItWorksSectionProperties {
  className?: string;
  pageType: "personal" | "business";
}

interface StepProperties {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProperties) {
  return (
    <div>
      <div className="text-xl text-[#FFFFFFE5] dark:text-[#131315] bg-[#FFFFFF0D] dark:bg-[#1313150D] w-12 h-12 rounded-[12px] flex items-center justify-center mb-5">
        {number}
      </div>
      <div className="text-white dark:text-[#131315] mb-2">{title}</div>
      <div className="text-[#FFFFFF99] dark:text-[#13131599] text-sm">
        {description}
      </div>
    </div>
  );
}

export function HowItWorksSection(properties: HowItWorksSectionProperties) {
  const { className, pageType } = properties;
  const t = useTranslations(
    pageType === "personal"
      ? "howItWorksSection.personal"
      : "howItWorksSection.business"
  );

  const steps = [
    {
      number: 1,
      title: t("step1.title"),
      description: t("step1.description"),
    },
    {
      number: 2,
      title: t("step2.title"),
      description: t("step2.description"),
    },
    {
      number: 3,
      title: t("step3.title"),
      description: t("step3.description"),
    },
  ];

  return (
    <section className={twMerge("bg-[#0E0E10] dark:bg-white py-8 lg:py-19", className)}>
      <div className="container mx-auto">
        {pageType === "business" && (
          <div className="flex gap-16 mb-8 md:mb-16 flex-col lg:flex-row">
            <div>
              <div className="text-[#131315E5] text-2xl lg:text-3xl max-w-[250px] lg:max-w-[300px]">
                {t("topBlock.title")}
              </div>
              <div className="text-[#13131599] text-xs lg:text-sm mt-2 max-w-[660px]">
                {t("topBlock.description")}
              </div>
              <Image
                alt=""
                src={BRANDED_CARD}
                width={361}
                height={189}
                className="h-auto block sm:hidden mt-5 mx-auto"
              />
              <Button as={"a"} href="mailto:info@weopsy.com" className="w-full sm:w-max mt-5">
                {t("topBlock.button")}
              </Button>
            </div>
            <Image
              alt=""
              src={BRANDED_CARD}
              width={494}
              height={260}
              className="h-auto shrink-0 hidden sm:block"
            />
          </div>
        )}
        <div>
          <div
            className={twMerge(
              "text-[#FFFFFF99] dark:text-[#13131599] text-xl md:text-3xl max-w-[910px]",
              pageType === "personal" ? "ml-auto" : "ml-0"
            )}
          >
            {t("title")}
          </div>
          <div className="mt-8 md:mt-16 flex gap-8 md:gap-16 flex-col lg:flex-row">
            {pageType === "personal" && (
              <Image
                alt=""
                src={CARD_IMAGE}
                width={512}
                height={311}
                className="w-[361px] md:w-[512px] h-auto shrink-0"
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 order-2 lg:order-1">
              {steps.map((step) => (
                <Step
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
            {pageType === "business" && (
              <Image
                alt=""
                src={CARD_DARK_IMAGE}
                width={512}
                height={311}
                className="w-[361px] md:w-[512px] h-auto order-1 lg:order-2 shrink-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
