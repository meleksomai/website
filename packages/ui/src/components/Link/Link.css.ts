import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";

const variant = {
  primary: atoms({
    color: {
      base: "primary",
      hover: "primary",
      active: "primary",
      focus: "primary",
    },
    textDecorationColor: "mauve8",
  }),
  secondary: atoms({
    textDecorationColor: "blue10",
    color: {
      hover: "blueA11",
      base: "blue11",
    },
  }),
};

const underline = {
  default: [
    atoms({
      textDecoration: {
        active: "none",
        focus: "underline",
        hover: "underline",
      },
    }),
  ],
  always: [
    atoms({
      textDecoration: "underline",
    }),
  ],
  none: [
    atoms({
      textDecoration: "none",
    }),
  ],
};

export type Underline = keyof typeof underline;

export const variants = recipe({
  base: [
    atoms({
      cursor: "pointer",
      width: "fit",
      display: "initial",
    }),
    style({
      overflowWrap: "break-word",
    }),
  ],
  variants: {
    variant,
    disabled: {
      true: atoms({
        cursor: "not-allowed",
      }),
      false: {},
    },
    underline,
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
    underline: "default",
  },
});

export type Variants = RecipeVariants<typeof variants>;
