import { style } from "@vanilla-extract/css";

import { atoms } from "../../atoms";

export const figure = style([
  atoms({
    display: "flex",
    height: "inherit",
    width: "inherit",
  }),
]);

export const image = style({
  maxWidth: "100%",
  height: "auto",
});
