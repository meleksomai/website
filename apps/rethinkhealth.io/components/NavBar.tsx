import Image from "next/image";
import React from "react";

import { Flex, Box } from "@thugga/ui";

import { NextLink } from "./NextLink";
import { ThemeToggle } from "./ThemeToggle";

import rethinkLogo from "../public/images/logo.svg";

export const NavBar = () => {
  return (
    <Flex justify="between">
      <Flex>
        <Image
          src={rethinkLogo}
          width="250px"
          height="100%"
          alt="rethink health logo"
        />
      </Flex>
      <Flex align="center" gap="4">
        <NextLink variant="simple" href="/">
          Home
        </NextLink>
        {/* <ThemeToggle /> */}
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";
