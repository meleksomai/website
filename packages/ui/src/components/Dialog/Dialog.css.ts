import { style } from "@vanilla-extract/css";

import { atoms } from "../../atoms";

export const overlay = style([
  atoms({
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "blackA9",
    zIndex: "40",
  }),
  style({
    animation: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
  }),
]);

export const content = style([
  atoms({
    position: "fixed",
    height: "auto",
    width: "auto",
    zIndex: "50",
  }),
  style({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    willChange: "transform",
    selectors: {
      "&:focus": {
        outline: "none",
      },
    },
  }),
]);
