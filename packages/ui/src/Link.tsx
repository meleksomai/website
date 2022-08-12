import React from "react";

import { styled } from "./stitches.config";
import { Text } from "./Text";

export const Link = styled("a", {
  alignItems: "center",
  gap: "$1",
  flexShrink: 0,
  outline: "none",
  // textDecorationLine: "none",
  textUnderlineOffset: "3px",
  textDecorationColor: "$slate4",
  WebkitTapHighlightColor: "rgba(0,0,0,0)",
  lineHeight: "inherit",
  "@hover": {
    "&:hover": {
      textDecorationLine: "underline",
    },
  },
  "&:focus": {
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineOffset: "2px",
    textDecorationLine: "none",
  },
  [`& ${Text}`]: {
    color: "inherit",
  },
  variants: {
    mono: {
      true: {
        fontFamily: "$mono",
      },
    },
    size: {
      small: {
        fontSize: "$2",
        height: "$4",
      },
      medium: {
        fontSize: "$3",
        height: "$7",
      },
      large: {
        fontSize: "$6",
        height: "$7",
      },
    },
    variant: {
      blue: {
        color: "$blue11",
        textDecorationColor: "$blue4",
        "&:focus": {
          outlineColor: "$blue8",
        },
      },
      subtle: {
        color: "$slate11",
        textDecorationColor: "$slate4",
        "&:focus": {
          outlineColor: "$slate8",
        },
      },
      contrast: {
        color: "$mauve12",
        textDecoration: "underline",
        textDecorationColor: "$slate4",
        "@hover": {
          "&:hover": {
            color: "$mauve12",
            textDecorationColor: "$slate7",
          },
        },
        "&:focus": {
          color: "$mauve12",
          textDecorationColor: "$orange7",
          outlineColor: "$mauve12",
        },
      },
      simple: {
        color: "$hiContrast",
        "@hover": {
          "&:hover": {
            color: "$slate12",
            textDecorationColor: "$slate7",
          },
        },
        "&:focus": {
          // outlineColor: "$slate8",
        },
      },
    },
  },
  defaultVariants: {
    variant: "contrast",
  },
});
