import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";

const size = {};

export type Size = keyof typeof size;

export const rootVariants = recipe({
  base: [
    atoms({
      position: "relative",
      width: "full",
      overflow: "hidden",
      borderRadius: "full",
      backgroundColor: "slate7",
      height: "300",
      marginLeft: "100",
    }),
    style({
      transform: "translateZ(0)",
    }),
  ],
  variants: {
    size,
  },
});

export type RootVariants = RecipeVariants<typeof rootVariants>;

export const indicatorVariants = recipe({
  base: [
    atoms({
      // position: "absolute",
      // top: 0,
      // left: 0,
      // bottom: 0,
      backgroundColor: "slate10",
      width: "full",
      height: "full",
    }),
  ],
  variants: {
    size,
  },
});

export type IndicatorVariants = RecipeVariants<typeof indicatorVariants>;
