import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../../components";
import { getAllRoles } from "../../lib/roles";

export default async function RoleSection() {
  const roles = await getAllRoles();
  return (
    <Section size="2">
      <Heading as="h3" size="2" css={{ pb: "$5" }}>
        Current Positions
      </Heading>
      <Grid gap="5" columns="1">
        {roles.map((role) => (
          <Box key={role.meta.slug}>
            <Heading as="p" size={"1"}>
              {role.meta.role}.{" "}
              <Heading inline as="span" size={"1"} css={{ color: "$slate10" }}>
                {role.meta.organization}
              </Heading>
            </Heading>
            <Paragraph>{role.content}</Paragraph>
            <NextLink href={role.meta.url}>Learn more</NextLink>
          </Box>
        ))}
      </Grid>
    </Section>
  );
}
