"use client";

import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

import { Text, Box, Grid, Stack, Link } from "@thugga/ui";

import { Spotify } from "./spotify";

// eslint-disable-next-line react/display-name
const FooterMenuLink = ({
  external = false,
  ...props
}: React.PropsWithChildren<{ external?: boolean; href: string }>) => {
  return (
    <Link
      size="small"
      {...props}
      suffix={external && <RxArrowTopRight />}
      external={external}
    >
      {props.children}
    </Link>
  );
};

const Footer = () => {
  return (
    <Stack space="800">
      <Box>
        <Spotify />
      </Box>
      <Grid columns={3} gap="400">
        <Stack
          space="200"
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          <Text bold>General</Text>
          <FooterMenuLink href="/">Home</FooterMenuLink>
          <FooterMenuLink href="/essays">Essays</FooterMenuLink>
          <FooterMenuLink href="/papers">Publications</FooterMenuLink>
        </Stack>
        <Stack
          space="200"
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          <Text bold>Profile</Text>
          <FooterMenuLink
            href="https://scholar.google.com/citations?hl=en&user=5MdxFjAAAAAJ"
            external
          >
            Google Scholar
          </FooterMenuLink>
          {/* <FooterMenuLink href="https://twitter.com/meleksomai">
              Twitter
            </FooterMenuLink> */}
          <FooterMenuLink href="https://www.linkedin.com/in/msomai/" external>
            LinkedIn
          </FooterMenuLink>
          <FooterMenuLink href="https://github.com/meleksomai" external>
            GitHub
          </FooterMenuLink>
        </Stack>
        <Stack
          space="200"
          direction="column"
          justify="flex-start"
          align="flex-start"
        >
          <Text bold>Affiliations</Text>
          <FooterMenuLink href="https://www.inceptionhealth.com/" external>
            Inception Health
          </FooterMenuLink>
          <FooterMenuLink
            external
            href="https://www.mcw.edu/departments/medicine/divisions/general-internal-medicine/people/melek-somai-md"
          >
            MCW
          </FooterMenuLink>
          <FooterMenuLink href="https://rethinkhealth.io" external>
            Rethink Health
          </FooterMenuLink>
        </Stack>
      </Grid>
      <Box>
        <Text variant="extraSmall">
          Made with love from Milwaukee, and Tunis.
        </Text>
      </Box>
    </Stack>
  );
};

Footer.displayName = "Footer";

export default Footer;
