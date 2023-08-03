import { style } from "@vanilla-extract/css";

import { atoms } from "../../atoms";

const SCROLLBAR_SIZE = 5;

export const root = style([
  atoms({
    overflow: "hidden",
    height: "full",
  }),
]);

export const viewport = style([
  atoms({
    width: "full",
    height: "full",
  }),
  style({
    borderRadius: "inherit",
  }),
]);

export const scrollbar = style([
  atoms({
    display: "flex",
    borderRadius: "medium",
    backgroundColor: {
      base: "blackA6",
      hover: "blackA8",
    },
  }),
  style({
    padding: SCROLLBAR_SIZE,
    userSelect: "none",
    touchAction: "none",
    transition: "background 160ms ease-out",
    // selectors: {
    //   '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
    //   '&[data-orientation="horizontal"]': {
    //     flexDirection: "column",
    //     height: SCROLLBAR_SIZE,
    //   },
    // },
  }),
]);

export const scrollbarThumb = style([
  atoms({
    flex: 1,
    backgroundColor: "mauve10",
    borderRadius: "large",
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: "relative",
  }),
  style({
    selectors: {
      "&::before": {
        content: "",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        minWidth: "44px",
        minHeight: "44px",
      },
    },
  }),
]);

export const corner = style([
  atoms({
    backgroundColor: "blackA8",
  }),
]);
