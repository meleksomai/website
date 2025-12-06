import { ContactSection } from "./_components/section-contact";
import IntroSection from "./_components/section-intro";

export default function Page() {
  return (
    <div className="py-12 md:space-y-24 lg:space-y-36">
      <IntroSection />
      <ContactSection />
    </div>
  );
}
