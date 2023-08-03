import React from "react";

import EssaysSection from "./section.essays";

import HeroSection from "../hero";

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
