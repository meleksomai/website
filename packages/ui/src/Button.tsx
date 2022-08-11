import * as React from "react";

import { styled } from "./stitches.config";

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      simple: {
        backgroundColor: "$mauve2",
        color: "$mauve12",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": { backgroundColor: "$colors$mauve5" },
        "&:focus": { boxShadow: `0 0 0 2px $colors$mauve10` },
      },
      orange: {
        backgroundColor: "$orange3",
        color: "$orange10",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": { backgroundColor: "$colors$orange5" },
        "&:focus": { boxShadow: `0 0 0 2px $colors$orange10` },
      },
      violet: {
        backgroundColor: "$violet10",
        color: "$violet11",
        boxShadow: "0 2px 10px $blackA7",
        "&:hover": { backgroundColor: "$colors$mauve3" },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      green: {
        backgroundColor: "$green4",
        color: "$green11",
        "&:hover": { backgroundColor: "$green5" },
        "&:focus": { boxShadow: "0 0 0 2px $green7" },
      },
    },
  },

  defaultVariants: {
    variant: "simple",
  },
});
