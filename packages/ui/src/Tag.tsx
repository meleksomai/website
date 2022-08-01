import React from "react";

import { styled } from "./stitches.config";

export const Tag = styled("span", {
  // Reset
  py: "2px",
  px: "2px",
  variants: {
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
        letterSpacing: "-.015em",
      },
      "6": {
        fontSize: "$6",
        letterSpacing: "-.016em",
      },
      "7": {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      "8": {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      "9": {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
    variant: {
      red: {
        color: "$red11",
        backgroundColor: "$red5",
      },
      blue: {
        color: "$blue11",
        backgroundColor: "$blue5",
      },
      green: {
        color: "$green11",
        backgroundColor: "$green5",
      },
      gray: {
        color: "$slate11",
        backgroundColor: "$slate5",
      },
      violet: {
        color: "$violet11",
        backgroundColor: "$violet5",
      },
      violetDark: {
        color: "$violet4",
        backgroundColor: "$violet12",
      },
      contrast: {
        color: "$loContrast",
        backgroundColor: "$hiContrast",
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    mono: {
      true: {
        fontFamily: "$mono",
      },
    },
  },
  compoundVariants: [
    {
      variant: "red",
      gradient: "true",
      css: {
        background: "linear-gradient(to right, $red11, $crimson11)",
      },
    },
    {
      variant: "blue",
      gradient: "true",
      css: {
        background: "linear-gradient(to right, $blue11, $cyan11)",
      },
    },
    {
      variant: "green",
      gradient: "true",
      css: {
        background: "linear-gradient(to right, $green11, $lime11)",
      },
    },
    {
      variant: "contrast",
      gradient: "true",
      css: {
        background: "linear-gradient(to right, $hiContrast, $gray12)",
      },
    },
    {
      variant: "gray",
      gradient: "true",
      css: {
        background: "linear-gradient(to right, $slate5, $slate1)",
      },
    },
  ],
  defaultVariants: {
    size: "1",
    variant: "gray",
  },
});
