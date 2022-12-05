import Image from "next/image";
import React from "react";

import { Flex, Box } from "@thugga/ui";

import { Logo } from "./Logo";
import { NextLink } from "./NextLink";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <Flex justify="between">
      <Flex css={{ my: "$4" }}>
        <Logo width="200px" height="100%" />
      </Flex>
      <Flex align="center" gap="4">
        <NextLink variant="simple" href="/">
          Home
        </NextLink>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";
