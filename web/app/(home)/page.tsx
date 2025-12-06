"use server";

import { getBlogEssays } from "@/app/(blog)/utils";
import { ContactSection } from "./_components/section-contact";
import { EssaySection } from "./_components/section-essays";
import IntroSection from "./_components/section-intro";
import { ResearchSection } from "./_components/section-research";

export default async function Page() {
  const articles = await getBlogEssays();

  return (
    <div className="space-y-20 py-12 md:space-y-24 lg:space-y-36">
      <IntroSection />
      <EssaySection
        essays={articles.map((article) => ({ ...article, Essay: undefined }))}
      />
      <ResearchSection />
      <ContactSection />
    </div>
  );
}
