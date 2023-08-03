import * as React from "react";

import * as styles from "./Callout.css";

import { Box, BoxProps } from "../Box";
import { Heading } from "../Heading";
import { Stack } from "../Stack";
import { Text } from "../Text";

export type CalloutProps = {
  children?: React.ReactNode;
  title?: string;
} & styles.Variants;

export const Callout = ({
  children,
  rounded = true,
  title,
  variant = "default",
}: CalloutProps) => {
  return (
    <Box
      className={styles.variants({
        variant,
        rounded,
      })}
    >
      <Stack direction="column" space="100" align="flex-start">
        {title && (
          <Heading size="p" bold>
            {title}
          </Heading>
        )}
        <Text>{children}</Text>
      </Stack>
    </Box>
  );
};

Callout.displayName = "Callout";
