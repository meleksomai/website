import React from "react";

import HeroSection from "@/components/Hero";

import MostPopularSection from "./section.popular";
import PublicationsSection from "./section.publications";

export default async function PapersPage() {
  return (
    <>
      <HeroSection>
        Research in areas ranging from Clinical Computing, Patient Remote
        Monitoring, Neuro-Epidemiology, to Blockchain.
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <MostPopularSection />
      {/* @ts-expect-error Server Component */}
      <PublicationsSection />
    </>
  );
}
