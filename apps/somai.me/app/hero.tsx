import { PropsWithChildren } from "react";

import { Heading, Box } from "@thugga/ui";

export default function HeroSection({ children }: PropsWithChildren<{}>) {
  return (
    <Box>
      <Heading as="h1" size="h2" balance>
        Melek Somai.{" "}
        <Heading size="h2" as="span" color="slate11">
          {children}
        </Heading>
      </Heading>
    </Box>
  );
}
