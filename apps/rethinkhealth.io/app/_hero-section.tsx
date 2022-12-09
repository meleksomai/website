import { Heading, Section, Box, Grid } from "@thugga/ui";

import { NextLink } from "../components";

export default function HeroSection() {
  return (
    <Section size="2">
      <Grid gap="5" columns={{ "@initial": "2", "@bp3": "3" }}>
        <Box css={{ gridColumn: "span 2" }}>
          <Heading as="p" size="4" css={{ pb: "$5" }} mono>
            Assisting healthcare systems achieve their{" "}
            <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
              Digital Transformation{" "}
            </Heading>
            at scale by leveraging{" "}
            <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
              Clinical Engineering
            </Heading>
            ,{" "}
            <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
              Product Design
            </Heading>
            , and{" "}
            <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
              Data Science
            </Heading>
            .
          </Heading>
          <NextLink
            href="mailto:contact@rethinkhealth.io"
            variant="blue"
            size="large"
          >
            Contact us
          </NextLink>
        </Box>
      </Grid>
    </Section>
  );
}
