import React from "react";

import HeroSection from "@/components/Hero";
import { Seo } from "@/lib/seo";

import EssaysSection from "./section.essays";

export const metadata = Seo({
  title: "Essays",
  description:
    "A space to share thoughts and ideas that are often reflections on my current research.",
  og: {
    title: "Essays",
    subtitle:
      "A space to share thoughts and ideas that are often reflections on my current research.",
  },
});

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
