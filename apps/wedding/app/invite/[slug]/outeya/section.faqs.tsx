import React from "react";

import { Heading, Section, Box, Paragraph, Text } from "@thugga/ui";

import { NextLink } from "../../../../components";

const OuteyaCostume = () => (
  <Box>
    <Heading as="h4" size="2" serif>
      Costume
    </Heading>
    <Paragraph>
      If you are interested in wearing Mehdaoui traditional clothing, we are
      offering traditional costumes to our guests for rent. The price is around
      50$. Please contact us.
    </Paragraph>
  </Box>
);

export default function FAQsSection() {
  return (
    <Box css={{ mb: "$2" }}>
      <Section size="2">
        <Heading as="h3" size="3" serif>
          FAQs
        </Heading>
        <OuteyaCostume />
      </Section>
    </Box>
  );
}
