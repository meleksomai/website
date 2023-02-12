"use client";

import React from "react";

import { Text, Section, Box } from "@thugga/ui";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Section css={{ pt: "$8" }}>
      <Box css={{ py: "$2" }}>
        <Text size="1">&#169; {year} Azur Systemes.</Text>
      </Box>
    </Section>
  );
};

Footer.displayName = "Footer";
