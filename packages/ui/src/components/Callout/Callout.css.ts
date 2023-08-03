import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";

const base = style([
  atoms({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "300",
    padding: "400",
  }),
]);

const variant = {
  default: atoms({
    color: "slate11",
    backgroundColor: "slate6",
  }),
  check: atoms({
    color: "green10",
    backgroundColor: "green3",
  }),
  caution: atoms({
    color: "red10",
    backgroundColor: "red3",
  }),
  warning: atoms({
    color: "yellow11",
    backgroundColor: "yellow5",
  }),
  note: atoms({
    color: "blue10",
    backgroundColor: "blue4",
  }),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base,
  variants: {
    variant,
    rounded: {
      true: atoms({
        borderRadius: "medium",
      }),
    },
  },
});

export type Variants = RecipeVariants<typeof variants>;
