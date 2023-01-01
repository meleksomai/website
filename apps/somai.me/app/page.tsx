import { Box } from "@thugga/ui";

import HeroSection from "../components/Hero";

import EssaysSection from "./section.essays";
import PapersSection from "./section.papers";

export default function MainPage() {
  return (
    <>
      <Box>
        {/* @ts-expect-error Server Component */}
        <HeroSection>
          works at the intersection of Healthcare Informatics, Clinical Engineering, and Data Science.
        </HeroSection>
        {/* @ts-expect-error Server Component */}
        <EssaysSection />
        {/* @ts-expect-error Server Component */}
        <PapersSection />
      </Box>
    </>
  );
}
