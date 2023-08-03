"use client";

import React from "react";

import { Text, Box, Grid, Stack, Link } from "@thugga/ui";

import { Spotify } from "./spotify";

// eslint-disable-next-line react/display-name
const FooterMenuLink = (props: React.PropsWithChildren<{ href: string }>) => {
  return <Link {...props}>{props.children}</Link>;
};

const Footer = () => {
  return (
    <Box>
      <Box>
        <Spotify />
      </Box>
      <Box>
        <Grid>
          <Stack direction="column" justify="flex-start">
            <Text as="p" bold>
              General
            </Text>
            <FooterMenuLink href="/">Home</FooterMenuLink>
            <FooterMenuLink href="/essays">Essays</FooterMenuLink>
            <FooterMenuLink href="/papers">Publications</FooterMenuLink>
          </Stack>
          <Stack direction="column" justify="flex-start">
            <Text as="p" bold>
              Profile
            </Text>
            <FooterMenuLink href="https://scholar.google.com/citations?hl=en&user=5MdxFjAAAAAJ">
              Google Scholar
            </FooterMenuLink>
            <FooterMenuLink href="https://twitter.com/meleksomai">
              Twitter
            </FooterMenuLink>
            <FooterMenuLink href="https://www.linkedin.com/in/msomai/">
              LinkedIn
            </FooterMenuLink>
            <FooterMenuLink href="https://github.com/meleksomai">
              GitHub
            </FooterMenuLink>
          </Stack>
          <Stack direction="column" justify="flex-start">
            <Text as="p" bold>
              Affiliations
            </Text>
            <FooterMenuLink href="https://www.inceptionhealth.com/">
              Inception Health
            </FooterMenuLink>
            <FooterMenuLink href="https://www.mcw.edu/departments/medicine/divisions/general-internal-medicine/people/melek-somai-md">
              Medical College of Wisconsin
            </FooterMenuLink>
            <FooterMenuLink href="https://tuncph.org">TunCPH</FooterMenuLink>
          </Stack>
        </Grid>
      </Box>
      <Box>
        <Text variant="small">
          Made with love from Chicago, Milwaukee, and Tunis.
        </Text>
      </Box>
    </Box>
  );
};

Footer.displayName = "Footer";

export default Footer;
