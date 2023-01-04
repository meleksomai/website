"use client";

import { Grid, Heading, Paragraph, Section } from "@thugga/ui";

import { NextLink } from "../../../components";
import { Role } from "../../../lib/roles";

export interface RoleSectionProps {
  roles?: Role[] | undefined;
}

export default function RoleSection(props: RoleSectionProps) {
  return (
    <Section size="2">
      <Heading as="h3" size="2" css={{ pb: "$5" }}>
        Current Positions
      </Heading>
      <Grid gap="5" columns="1">
        {props.roles?.map((role) => (
          <Section key={role.meta.slug}>
            <Heading as="span" size="1" inline>
              {role.meta.role}.{" "}
            </Heading>
            <Heading inline as="span" size="1" css={{ color: "$slate10" }}>
              {role.meta.organization}
            </Heading>
            <Paragraph>{role.content}</Paragraph>
            <NextLink href={role.meta.url}>Learn more</NextLink>
          </Section>
        ))}
      </Grid>
    </Section>
  );
}
