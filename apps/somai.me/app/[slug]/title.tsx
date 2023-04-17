import { PropsWithChildren } from "react";

import { Heading, Section } from "@thugga/ui";

import { Publication } from "../../lib/papers";

const TEXT_SIZE = "3";

export interface TitleProps {
  paper: Publication;
}

export default async function Title(props: PropsWithChildren<TitleProps>) {
  const { paper } = props;
  return (
    <Section size="2">
      <Heading as="h1" size={TEXT_SIZE} inline>
        {paper.citation.title}.{" "}
      </Heading>
      <Heading inline as="h2" size={TEXT_SIZE} css={{ color: "$slate10" }}>
        {paper.citation.subtitle}
      </Heading>
    </Section>
  );
}
