import React from "react";

import MostPopularSection from "./section.popular";
import PublicationsSection from "./section.publications";

import HeroSection from "../../components/Hero";

export default async function PapersPage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeroSection>
        | Research in areas ranging from Clinical Computing, Patient Remote
        Monitoring, Neuro-Epidemiology, to Blockchain.
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <MostPopularSection />
      {/* @ts-expect-error Server Component */}
      <PublicationsSection />
    </>
  );
}
