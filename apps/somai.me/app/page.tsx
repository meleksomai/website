import { Stack } from "@thugga/ui";

import HeroSection from "./hero";
import EssaysSection from "./section.essays";
import PapersSection from "./section.papers";

export default function MainPage() {
  return (
    <Stack space="1200">
      <HeroSection>
        Physician. Clinical Informatician. Data Scientist. Innovator. Works at
        the intersection of Healthcare Informatics, Clinical Computing, and Data
        Science.
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <EssaysSection />
      {/* @ts-expect-error Server Component */}
      <PapersSection />
    </Stack>
  );
}
