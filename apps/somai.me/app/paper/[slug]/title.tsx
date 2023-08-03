import { PropsWithChildren } from "react";

import { Heading, Stack } from "@thugga/ui";

import { Publication } from "../../../lib/papers";

const TEXT_SIZE = "3";

export interface TitleProps {
  paper: Publication;
}

export default async function Title(props: PropsWithChildren<TitleProps>) {
  const { paper } = props;
  return (
    <Stack>
      <Heading as="h1" size="h2">
        {paper.citation.title}.{" "}
        <Heading as="span" size="h2" color="slate11">
          {paper.citation.subtitle}
        </Heading>
      </Heading>
    </Stack>
  );
}
