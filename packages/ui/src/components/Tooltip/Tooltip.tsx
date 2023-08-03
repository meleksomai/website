"use client";

import * as TooltipPrimitives from "@radix-ui/react-tooltip";
import React from "react";

import * as styles from "./Tooltip.css";

import { Box } from "../Box";
import { Text } from "../Text";

export interface TooltipPros {
  content: React.ReactNode;
  key?: string;
  side?: "top" | "right" | "bottom" | "left";
  trigger: React.ReactNode;
}

export const Tooltip = ({
  key,
  content,
  side = "top",
  trigger,
}: TooltipPros) => {
  return (
    <TooltipPrimitives.Root key={key}>
      <TooltipPrimitives.Trigger asChild>
        <Box
          width="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {trigger}
        </Box>
      </TooltipPrimitives.Trigger>
      <TooltipPrimitives.Portal>
        <TooltipPrimitives.Content
          side={side}
          className={styles.content}
          sideOffset={2}
        >
          <Text variant="small">{content}</Text>
          <TooltipPrimitives.Arrow className={styles.tooltipArrow} />
        </TooltipPrimitives.Content>
      </TooltipPrimitives.Portal>
    </TooltipPrimitives.Root>
  );
};

Tooltip.Provider = TooltipPrimitives.Provider;
