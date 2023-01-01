import * as React from "react";

import { Heading, Avatar, Section, Box, Flex } from "@thugga/ui";

export default function MainPage() {
  return (
    <>
      <Box>
        <Flex direction={{ "@initial": "columnReverse", "@bp2": "row" }}>
          <Box css={{ mr: "$7" }}>
            <Heading size="4">Melek Somai</Heading>
            <Heading as="h2" variant="light" size="1">
              Chief Technology Officer at Inception Health
              <br />
              Assistant Professor of Medicine at the Medical College of
              Wisconsin
            </Heading>
          </Box>
          <Flex align="center">
            <Avatar src="/images/profile.jpeg" alt="" fallback="MS" size="4" />
          </Flex>
        </Flex>
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
