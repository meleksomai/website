import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";
import { vars } from "../../theme/vars.css";

const variant = {
  large: style([
    atoms({
      fontSize: "large",
      fontWeight: "normal",
      letterSpacing: "-0.02",
    }),
    style({
      lineHeight: "2rem",
    }),
  ]),
  reading: atoms({
    fontSize: "base",
    fontWeight: "normal",
    lineHeight: "2",
  }),
  base: atoms({
    fontSize: "base",
    fontWeight: "normal",
    letterSpacing: "-0.015",
    lineHeight: "1.625",
  }),
  small: style([
    atoms({
      fontSize: "small",
      fontWeight: "normal",
      letterSpacing: "-0.01",
    }),
    style({
      lineHeight: "1.5rem",
    }),
  ]),
  extraSmall: style([
    atoms({
      fontSize: "extraSmall",
      fontWeight: "normal",
      letterSpacing: "-0.01",
    }),
    style({
      lineHeight: "1.5rem",
    }),
  ]),
  label: atoms({
    color: "blue6",
    fontSize: "label",
    fontWeight: "semiBold",
    letterSpacing: "0.03",
    textTransform: "uppercase",
  }),
};

export const variants = recipe({
  variants: {
    variant,
    ellipsis: {
      true: style([
        style({
          textOverflow: "ellipsis",
        }),
        atoms({
          overflow: "hidden",
          whiteSpace: "nowrap",
        }),
      ]),
    },
    underline: {
      true: style({
        textDecoration: "underline",
      }),
    },
    ul: {
      true: style({
        listStyle: "disc",
        paddingLeft: vars.spacing["400"],
      }),
    },
    ol: {
      true: style({
        listStyle: "decimal",
        paddingLeft: vars.spacing["400"],
      }),
    },
  },
});

export type Variants = RecipeVariants<typeof variants>;
