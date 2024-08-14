import React, { forwardRef } from "react";

import { Stack, Link, Text, Box } from "@thugga/ui";

export interface TitleProps {
  description?: string;
  href: string;
  info?: string;
  subtitle?: string;
  title: string;
}

export const Title = forwardRef<any, TitleProps>(
  ({ href, title, subtitle, info, description }, ref) => {
    return (
      <Stack ref={ref} align="flex-start" space="200">
        <Box>
          <Link size="large" href={href}>
            {title}
          </Link>
          <Text color="slate11">{subtitle}</Text>
          <Text color="slate11" variant="small">
            {info}
          </Text>
        </Box>
        <Text>{description}</Text>
      </Stack>
    );
  },
);

Title.displayName = "Title";
