"use client";
import React from "react";

import { Box } from "@thugga/ui";

export const FancyBackground: React.FC = ({ children }) => {
  return (
    <Box
      css={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: "absolute",
        zIndex: "-1",
        background:
          "radial-gradient(circle at 15% 50%, $yellow4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $pink4, rgba(255, 255, 255, 0) 25%)",
      }}
    >
      {children}
    </Box>
  );
};
