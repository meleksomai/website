"use client";
import { RxArrowTopRight } from "react-icons/rx";

import { Grid, Heading, Stack, Text, Link } from "@thugga/ui";

import { Role } from "@/lib/roles";

export interface RoleSectionProps {
  roles?: Role[] | undefined;
}

export default function RoleSection(props: RoleSectionProps) {
  return (
    <Stack space="800">
      <Heading size="h3">Current Positions</Heading>
      <Grid gap="50" columns={1}>
        <Stack space="800">
          {props.roles?.map((role) => (
            <Stack key={role.meta.slug} justify="flex-start" align="flex-start">
              <Heading size="h4">
                {role.meta.role}.{" "}
                <Heading size="h4" as="span" color="slate11">
                  {role.meta.organization}
                </Heading>
              </Heading>
              <Text>{role.content}</Text>
              <Link suffix={<RxArrowTopRight />} href={role.meta.url}>
                Learn more
              </Link>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Stack>
  );
}
