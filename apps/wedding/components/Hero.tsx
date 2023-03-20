"use client";

import { PropsWithChildren } from "react";

import { Heading, Section } from "@thugga/ui";

const TEXT_SIZE = "3";

export default async function HeroSection({
  children,
}: PropsWithChildren<undefined>) {
  return (
    <Section size="2">
      <Heading as="h1" size={TEXT_SIZE} inline>
        Melek Somai.{" "}
      </Heading>
      <Heading inline as="h2" size={TEXT_SIZE} css={{ color: "$slate10" }}>
        {children}
      </Heading>
    </Section>
  );
}
