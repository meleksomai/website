import React from "react";

import { Text, Section, Box } from "@thugga/ui";

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <Section css={{ pt: "$8" }}>
      <Box css={{ py: "$2" }}>
        <Text size="1">&#169; {year} Rethink Health LLC.</Text>
      </Box>
    </Section>
  );
};

Footer.displayName = "Footer";
