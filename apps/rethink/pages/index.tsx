import * as React from "react";

import { Heading, Section, Box } from "@thugga/ui";

export default function Index() {
  return (
    <>
      <Box css={{ minHeight: "400px" }}>
        <Section size="2">
          <Heading as="p" size="3" mono css={{ color: "$mauve9" }}>
            Operating at the intersection of{" "}
            <Heading inline as="span" size="3" mono>
              Healthcare Informatics
            </Heading>
            ,{" "}
            <Heading inline as="span" size="3" mono>
              Clinical Engineering
            </Heading>
            , and{" "}
            <Heading inline as="span" size="3" mono>
              Data Science
            </Heading>
            .
          </Heading>
        </Section>
      </Box>
    </>
  );
}
