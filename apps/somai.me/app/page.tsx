import { Stack } from "@thugga/ui";

import HeroSection from "@/components/Hero";

import EssaysSection from "./section.essays";
import PapersSection from "./section.papers";

export default function MainPage() {
  return (
    <Stack space="1200">
      <HeroSection>
        Physician. Clinical Informatician. Statistician. Works at the
        intersection of Healthcare Informatics, Data Science, and Product.
        Engineering.
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <EssaysSection />
      {/* @ts-expect-error Server Component */}
      <PapersSection />
    </Stack>
  );
}
