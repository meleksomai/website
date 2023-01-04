import React from "react";

import EssaysSection from "./section.essays";

import HeroSection from "../../../components/Hero";

export default async function EssayPage() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeroSection>
        A space to share thoughts and ideas that are often reflections on my
        current research.
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <EssaysSection />
    </>
  );
}
