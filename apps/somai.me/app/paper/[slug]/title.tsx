import { PropsWithChildren } from "react";

import { Heading, Avatar, Section, Box, Flex } from "@thugga/ui";

import { Publication } from "../../../lib/papers";

const TEXT_SIZE = "3";

export interface TitleProps {
  paper: Publication;
}

export default async function Title(props: PropsWithChildren<TitleProps>) {
  const { paper } = props;
  return (
    <Section size="2">
      <Heading as="p" size={TEXT_SIZE}>
        {paper.citation.title}.{" "}
        <Heading inline as="span" size={TEXT_SIZE} css={{ color: "$slate10" }}>
          {paper.citation.subtitle}
        </Heading>
      </Heading>
    </Section>
  );
}
