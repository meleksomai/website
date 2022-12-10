import { Heading, Section, Box, Grid, Paragraph } from "@thugga/ui";

import { NextLink } from "../components";

export default function HeroSection() {
  return (
    <Section size="2">
      <Grid gap="5" columns={{ "@initial": "2", "@bp3": "3" }}>
        <Box css={{ gridColumn: "span 2" }}>
          <Heading as="p" size="4" css={{ pb: "$5" }} mono>
            Introducing{"  "}
            <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
              Rethink Health
            </Heading>
            - the leading provider of digital transformation solutions for
            healthcare systems.
          </Heading>
          <Paragraph css={{ pb: "$5" }}>
            Leveraging clinical engineering, product design, and data science,
            we help healthcare organizations improve patient care, reduce costs,
            and increase efficiency. With our expertise and innovative approach,
            we are transforming the way healthcare is delivered. Contact us
            today to learn more and see how we can help your organization
            achieve its digital transformation goals at scale.
          </Paragraph>
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
