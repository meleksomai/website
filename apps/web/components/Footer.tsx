import Image from "next/image";
import React from "react";

import { Text, Section, Flex } from "@thugga/ui";

import Spotify from "./Spotify";

import profilePic from "../public/images/spotify.svg";

const DEFAULT_TAG = "div";

export const Footer = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>
  //   NextLinkProps
>((props, forwardedRef) => {
  return (
    <Section css={{ pt: "$8" }}>
      <Flex>
        <Flex css={{ width: "$5", mr: "$1" }}>
          <Image src={profilePic} />
        </Flex>
        <Flex>
          <Spotify />
        </Flex>
      </Flex>
      <Text size="1">Made with love from Wisconsin, Illinois, and Tunis.</Text>
    </Section>
  );
});

Footer.displayName = "Footer";
