import { PropsWithChildren } from "react";

import { Heading, Avatar, Section, Box, Flex } from "@thugga/ui";

const TEXT_SIZE = "3";

export default async function HeroSection({
  children,
}: PropsWithChildren<undefined>) {
  return (
    <Section size="2">
      <Heading as="p" size={TEXT_SIZE}>
        Melek Somai{" "}
        <Heading inline as="span" size={TEXT_SIZE} css={{ color: "$slate10" }}>
          {children}
        </Heading>
      </Heading>
    </Section>
  );
}
