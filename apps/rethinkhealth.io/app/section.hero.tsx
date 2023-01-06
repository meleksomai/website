"use client";

import { Heading, Section, Box, Grid } from "@thugga/ui";
import Spline from "@splinetool/react-spline";

import { NextLink } from "../components";

export default function HeroSection() {
  return (
    <Section size="2">
      <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
        <Box css={{ gridColumn: "span 1" }}>
          <Heading as="p" size="4" css={{ pb: "$5" }} mono>
            We help healthcare systems through their{"  "}
            <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
              digital transformation{"  "}
            </Heading>
            journey.
          </Heading>
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
        </Box>
        <Box
          css={{
            when: {
              "@initial": {
                display: "none",
              },
              "@bp2": {
                display: "flex",
              },
            },
          }}
        >
          <Spline scene="https://prod.spline.design/7it3ORQcGVeBwdhF/scene.splinecode" />
        </Box>
      </Grid>
    </Section>
  );
}
