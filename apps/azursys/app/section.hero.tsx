import { Heading, Section, Box, Grid } from "@thugga/ui";

import { NextLink } from "../components";

export default function HeroSection() {
  return (
    <Section size="2">
      <Grid gap="5" columns={{ "@initial": "2", "@bp2": "3" }}>
        <Box css={{ gridColumn: "span 2" }}>
          <Heading as="p" size="4" css={{ pb: "$5" }} mono>
            Votre partenaire pour réussir votre{"  "}
            <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
              transformation digitale{"  "}
            </Heading>
            .
          </Heading>
        </Box>
      </Grid>
      <Grid gap="5" columns={{ "@initial": "2", "@bp2": "4" }}>
        <Box css={{ gridColumn: "span 2" }}>
          <Heading as="p" size="1" css={{ pb: "$5" }}>
            Contact us today to learn more and see how we can help your
            organization achieve its digital transformation goals at scale.
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
