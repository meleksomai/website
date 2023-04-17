import * as React from "react";

import { styled } from "./stitches.config";

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  lineHeight: 1,
  fontWeight: 500,
  "&:hover": { cursor: "pointer" },

  variants: {
    disabled: {
      true: {
        opacity: 0.9,
        pointerEvents: "none",
      },
    },
    mono: {
      true: {
        fontFamily: "$mono",
      },
    },
    size: {
      small: {
        fontSize: "$2",
        height: 27,
      },
      medium: {
        fontSize: "$3",
        height: 35,
      },
      large: {
        fontSize: "$5",
        height: 55,
      },
    },
    variant: {
      simple: {
        backgroundColor: "$colors$mauve2",
        color: "$colors$mauve12",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": { backgroundColor: "$colors$mauve5" },
        "&:focus": { boxShadow: `0 0 0 2px $colors$mauve10` },
      },
      dark: {
        backgroundColor: "$colors$slate12",
        color: "$colors$loContrast",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": { backgroundColor: "$slate11" },
        "&:focus": {
          boxShadow: `0 0 0 2px $colors$slate9`,
          backgroundColor: "$slate8",
          color: "$hiContrast",
        },
      },
      orange: {
        backgroundColor: "$colors$orange3",
        color: "$colors$orange10",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": { backgroundColor: "$colors$orange5" },
        "&:focus": { boxShadow: `0 0 0 2px $colors$orange10` },
      },
      violet: {
        backgroundColor: "$colors$violet10",
        color: "$colors$violet11",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": { backgroundColor: "$colors$mauve3" },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      blue: {
        backgroundColor: "$colors$blueA10",
        color: "$colors$loContrast",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": {
          backgroundColor: "$colors$blue9",
        },
        "&:focus": {
          boxShadow: `0 0 0 2px black`,
          backgroundColor: "$colors$blue12",
        },
      },
      green: {
        backgroundColor: "$colors$green4",
        color: "$colors$green11",
        "&:hover": { backgroundColor: "$green5" },
        "&:focus": { boxShadow: "0 0 0 2px $green7" },
      },
    },
  },

  defaultVariants: {
    variant: "simple",
    size: "medium",
  },
});
