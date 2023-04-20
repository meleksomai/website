"use client";
import { PropsWithChildren } from "react";

import { Heading, Section } from "@thugga/ui";

const TEXT_SIZE = "3";

export interface HeroSectionProps {
  subtitle?: string;
}

export default function HeroSection({
  children,
  subtitle,
}: PropsWithChildren<HeroSectionProps>) {
  return (
    <Section size="2">
      <Heading as="h1" size={TEXT_SIZE} inline>
        Melek Somai. {subtitle && <span>{subtitle}</span>}
      </Heading>
      <Heading inline as="h2" size={TEXT_SIZE} css={{ color: "$slate10" }}>
        {children}
      </Heading>
    </Section>
  );
}
