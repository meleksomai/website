import React from "react";
import Image from "next/image";

import profileImage from "./image.png";

import { Section, Heading, Box } from "@thugga/ui";

import HeroSection from "./section.hero";
import UpcomingAnnouncement from "./section.upcoming";

const ENGAGEMENT_DATE = "07 Jan 2023 17:30:00 GMT+1";

export default function PaperPage() {
  const today = Date.now();
  const weddingDate = Date.parse(ENGAGEMENT_DATE);

  const isUpcoming = today < weddingDate;

  return (
    <>
      <Section css={{ position: "relative" }}>
        <Image
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="imenmelek"
          src={profileImage}
          placeholder="blur"
        />
      </Section>
      {/* @ts-expect-error Server Component */}
      <HeroSection />
      <Section>{isUpcoming && <UpcomingAnnouncement />}</Section>
    </>
  );
}
