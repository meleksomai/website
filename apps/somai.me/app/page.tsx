import { Box } from "@thugga/ui";

import EssaysSection from "./section.essays";
import PapersSection from "./section.papers";

import HeroSection from "../components/Hero";

export default function MainPage() {
  return (
    <>
      <Box>
        {/* @ts-expect-error Server Component */}
        <HeroSection>
          Physician. Clinical Informatician. Data Scientist. Innovator. Works at
          the intersection of Healthcare Informatics, Clinical Computing, and
          Data Science.
        </HeroSection>
        {/* @ts-expect-error Server Component */}
        <EssaysSection />
        {/* @ts-expect-error Server Component */}
        <PapersSection />
      </Box>
    </>
  );
}
