import React from "react";

import { Section, Heading, Box } from "@thugga/ui";

import HeroSection from "./section.hero";
import UpcomingAnnouncement from "./section.upcoming";

const ENGAGEMENT_DATE = "07 Jan 2023 17:30:00 GMT+1"

export default function PaperPage() {
  const today = Date.now();
  const weddingDate = Date.parse(ENGAGEMENT_DATE);

  const isUpcoming = today < weddingDate;

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeroSection />
      <Section>{isUpcoming && <UpcomingAnnouncement />}</Section>
    </>
  );
}
