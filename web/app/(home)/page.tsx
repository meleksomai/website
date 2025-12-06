import { ContactSection } from "./_components/section-contact";
import { EssaySection } from "./_components/section-essays";
import IntroSection from "./_components/section-intro";
import { ResearchSection } from "./_components/section-research";

export default function Page() {
  return (
    <div className="space-y-20 py-12 md:space-y-24 lg:space-y-36">
      <IntroSection />
      <EssaySection />
      <ResearchSection />
      <ContactSection />
    </div>
  );
}
