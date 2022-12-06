import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import React from "react";

import { Flex, Box, Text, Button } from "@thugga/ui";

import { Logo } from "./Logo";
import { NextLink } from "./NextLink";
import { ThemeToggle } from "./ThemeToggle";

const LoginNavLink = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/dashboard";
          }}
          variant="blue"
        >
          Dashboard
        </Button>
        <NextLink href="/api/auth/logout" variant="subtle" size="small">
          Logout
        </NextLink>
      </>
    );
  } else {
    return (
      <Button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/api/auth/login";
        }}
        variant="blue"
      >
        Login
      </Button>
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
        <NextLink variant="simple" href="/">
          Products
        </NextLink>
        <NextLink variant="simple" href="/">
          Services
        </NextLink>
        <LoginNavLink />
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";
