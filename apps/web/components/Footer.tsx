import Image from "next/image";
import React from "react";

import { Text, Section, Box } from "@thugga/ui";

import Spotify from "./Spotify";

import profilePic from "../public/images/spotify.svg";

const DEFAULT_TAG = "div";

export const Footer = () => {
  return (
    <Section css={{ pt: "$8" }}>
      <Box css={{ py: "$2" }}>
        <Spotify />
      </Box>
      <Box css={{ py: "$2" }}>
        <Text size="1">
          Made with love from Wisconsin, Illinois, and Tunis.
        </Text>
      </Box>
    </Section>
  );
};

Footer.displayName = "Footer";
