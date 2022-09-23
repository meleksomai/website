import Image from "next/image";
import React from "react";

import { Text, Section, Box, Grid, Flex } from "@thugga/ui";

import { NextLink, NextLinkProps } from "./NextLink";
import Spotify from "./Spotify";

// eslint-disable-next-line react/display-name
const FooterMenuLink = (props: React.PropsWithChildren<{ href: string }>) => {
  return (
    <NextLink variant="simple" size="medium" css={{ py: "$1" }} {...props}>
      {props.children}
    </NextLink>
  );
};

export const Footer = () => {
  return (
    <Section css={{ pt: "$8" }}>
      <Box css={{ py: "$5" }}>
        <Spotify />
      </Box>
      <Box css={{ py: "$5" }}>
        <Grid gap="5" columns={{ "@initial": "1", "@bp2": "3" }}>
          <Flex direction="column" justify="start">
            <Text as="p" size="3" bold css={{ py: "$1" }}>
              General
            </Text>
            <FooterMenuLink href="/">Home</FooterMenuLink>
            <FooterMenuLink href="/essays">Essays</FooterMenuLink>
            <FooterMenuLink href="/papers">Publications</FooterMenuLink>
          </Flex>
          <Flex direction="column" justify="start">
            <Text as="p" size="3" bold css={{ py: "$1" }}>
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
          </Flex>
          <Flex direction="column" justify="start">
            <Text as="p" size="3" bold css={{ py: "$1" }}>
              Affiliations
            </Text>
            <FooterMenuLink href="https://www.inceptionhealth.com/">
              Inception Health
            </FooterMenuLink>
            <FooterMenuLink href="https://www.mcw.edu/departments/medicine/divisions/general-internal-medicine/people/melek-somai-md">
              Medical College of Wisconsin
            </FooterMenuLink>
            <FooterMenuLink href="https://tuncph.org">TunCPH</FooterMenuLink>
          </Flex>
        </Grid>
      </Box>
      <Box css={{ py: "$2" }}>
        <Text size="1">Made with love from Chicago, Milwaukee, and Tunis.</Text>
      </Box>
    </Section>
  );
};

Footer.displayName = "Footer";
