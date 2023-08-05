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
    <Box display="inline">
      <Heading as="h1" size="h2" inline>
        {`${title}. `}
      </Heading>
      <Heading size="h2" as="h2" color="slate11" inline>
        {children}
      </Heading>
    </Box>
  );
}
