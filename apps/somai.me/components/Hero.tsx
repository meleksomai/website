import React from "react";

import { Heading, Box } from "@thugga/ui";

export default function HeroSection({
  children,
  title = "Melek Somai",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <Box>
      <Heading as="h1" size="h2" balance>
        {`${title}. `}
        <Heading size="h2" as="span" color="slate11">
          {children}
        </Heading>
      </Heading>
    </Box>
  );
}
