import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";
import { vars } from "../../theme/vars.css";

const base = atoms({
  padding: "50",
});

const variant = {
  red: atoms({
    color: "red11",
    backgroundColor: "red5",
  }),
  yellow: atoms({
    color: "yellow11",
    backgroundColor: "yellow5",
  }),
  green: atoms({
    color: "green11",
    backgroundColor: "green5",
  }),
  blue: atoms({
    color: "blue11",
    backgroundColor: "blue5",
  }),
  gray: atoms({
    color: "gray11",
    backgroundColor: "gray5",
  }),
  slate: atoms({
    color: "slate11",
    backgroundColor: "slate5",
  }),
  violet: atoms({
    color: "violet11",
    backgroundColor: "violet5",
  }),
  violetDark: atoms({
    color: "violet4",
    backgroundColor: "violet12",
  }),
};

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
  defaultVariants: {
    variant: "gray",
  },
});

export type Variants = RecipeVariants<typeof variants>;
