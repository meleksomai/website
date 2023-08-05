import React from "react";

import HeroSection from "@/components/hero";

import EssaysSection from "./section.essays";

export default async function EssayPage() {
  return (
    <>
      <HeroSection>
        A space to share thoughts and ideas that are often reflections on my
        current research.
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <EssaysSection />
    </>
  );
}
