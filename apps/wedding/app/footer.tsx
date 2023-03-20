import React from "react";

import { Text, Section, Box, Grid, Flex } from "@thugga/ui";

import { Spotify, NextLink } from "../components";

const Footer = () => {
  return (
    <Section css={{ pt: "$8" }}>
      <Box css={{ py: "$5" }}>
        <Spotify />
      </Box>
      <Box css={{ py: "$2" }}>
        <Text size="1">Made with love from Tunis.</Text>
      </Box>
    </Section>
  );
};

Footer.displayName = "Footer";

export default Footer;
