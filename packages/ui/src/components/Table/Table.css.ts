import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";

export const root = style([
  atoms({
    width: "full",
  }),
  style({
    tableLayout: "fixed",
    borderSpacing: 0,
  }),
]);

export const tbody = style([
  atoms({
    width: "full",
  }),
]);

export const thead = style([
  atoms({
    color: "gray11",
    fontSize: "label",
    fontWeight: "normal",
  }),
]);

// TODO: Add variants for striped, hover, and border
export const th = recipe({
  base: style([
    atoms({
      paddingY: "200",
      fontSize: "label",
      fontWeight: "normal",
      borderBottomWidth: "0.375",
      borderColor: "gray4",
    }),
  ]),
  variants: {
    center: {
      true: atoms({
        textAlign: "center",
      }),
      false: atoms({
        textAlign: "left",
      }),
    },
  },
});

export const td = recipe({
  base: style([
    atoms({
      fontSize: "base",
      paddingY: "200",
      borderBottomWidth: "0.375",
      borderColor: "gray4",
    }),
  ]),
  variants: {
    center: {
      true: atoms({
        textAlign: "center",
      }),
    },
  },
});
