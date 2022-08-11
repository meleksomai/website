import React from "react";

import { Box } from "./Box";
import { styled } from "./stitches.config";

export const Banner = styled(Box, {
  // Reset
  boxSizing: "border-box",
  "&::before": {
    boxSizing: "border-box",
  },
  "&::after": {
    boxSizing: "border-box",
  },

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$3",

  variants: {
    size: {
      "1": {
        py: "$1",
        px: "$4",
      },
    },
    variant: {
      loContrast: {
        backgroundColor: "$loContrast",
      },
      gray: {
        backgroundColor: "$slate3",
        color: "$slate11",
      },
      blue: {
        backgroundColor: "$blue3",
        color: "$blue10",
      },
      green: {
        backgroundColor: "$green3",
        color: "$green10",
      },
      red: {
        backgroundColor: "$red3",
        color: "$red10",
      },
      yellow: {
        backgroundColor: "$yellow3",
        color: "$yellow11",
      },
    },
    rounded: {
      true: {
        borderRadius: "$3",
      },
    },
    border: {
      true: {
        borderRadius: "$pill",
      },
    },
  },
  compoundVariants: [
    {
      border: "true",
      variant: "gray",
      css: {
        borderColor: "$slate6",
      },
    },
    {
      border: "true",
      variant: "blue",
      css: {
        borderColor: "$blue11",
      },
    },
    {
      border: "true",
      variant: "loContrast",
      css: {
        borderColor: "$slate6",
      },
    },
  ],
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
