"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

import { Flex, Link } from "@thugga/ui";

import { Logo } from "../components/Logo";
import { NextLink } from "../components/NextLink";
import { ThemeToggle } from "../components/ThemeToggle";

const LoginNavLink = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <NextLink href="/dashboard" variant="blue">
          Dashboard
        </NextLink>
        <NextLink href="/api/auth/logout" variant="subtle" size="small">
          Logout
        </NextLink>
      </>
    );
  } else {
    return (
      <Link href="/api/auth/login" variant="blue" as="a">
        Login
      </Link>
    );
  }
};

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
        {/* <NextLink variant="simple" href="/">
          Products
        </NextLink> */}
        {/* <NextLink variant="simple" href="/">
          Services
        </NextLink> */}
        {/* <LoginNavLink /> */}
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";
