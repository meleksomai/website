import React from "react";

import { Heading, Section, Box, Paragraph } from "@thugga/ui";

export default function FAQsSection() {
  return (
    <Box css={{ mb: "$2" }}>
      <Section size="2">
        <Heading as="h3" size="3" serif>
          FAQs
        </Heading>
        <Box>
          <Paragraph>
            For your convenience, we are compiling an FAQ which includes
            information on traveling to Tunisia, reserving hotels, and visiting
            archaeological sites. Stay tuned for more information coming soon.
          </Paragraph>
        </Box>
      </Section>
    </Box>
  );
}
