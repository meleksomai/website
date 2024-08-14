import React from "react";

import HeroSection from "@/components/Hero";
import { Seo } from "@/lib/seo";

import MostPopularSection from "./section.popular";
import PublicationsSection from "./section.publications";

export const metadata = Seo({
  title: "Academic Publications",
  description:
    "Research in areas ranging from Clinical Computing, Patient Remote Monitoring, Neuro-Epidemiology, to AI and Machine Learning.",
  og: {
    title: "Academic Publications",
    subtitle:
      "A space to share thoughts and ideas that are often reflections on my current research.",
  },
});

export default async function PapersPage() {
  return (
    <>
      <HeroSection>
        Research in areas ranging from Clinical Computing, Patient Remote
        Monitoring, Neuro-Epidemiology, to AI and Machine Learning.
      </HeroSection>
      <MostPopularSection />
      <PublicationsSection />
    </>
  );
}
