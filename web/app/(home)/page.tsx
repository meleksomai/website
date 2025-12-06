import { EssaySection } from "./_components/section-essays";
import IntroSection from "./_components/section-intro";

export default function Page() {
  return (
    <div className="py-12 md:space-y-24 lg:space-y-36">
      <IntroSection />
      <EssaySection />
    </div>
  );
}
