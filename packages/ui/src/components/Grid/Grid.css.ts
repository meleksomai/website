import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";
import { vars } from "../../theme/vars.css";

const boxShadowColorVar = createVar();
const buttonSize = createVar();

const columns = {
  1: [
    atoms({
      columns: 1,
    }),
  ],
  2: [
    atoms({
      columns: {
        mobile: 1,
        tablet: 2,
        desktop: 2,
      },
    }),
  ],
  3: [
    atoms({
      columns: {
        mobile: 1,
        tablet: 3,
        desktop: 3,
      },
    }),
  ],
  4: [
    atoms({
      columns: {
        mobile: 1,
        tablet: 4,
        desktop: 4,
      },
    }),
  ],
};

export type Columns = keyof typeof columns;

export const variants = recipe({
  base: {
    display: "grid",
  },
  variants: {
    // disabled: {
    //   true: atoms({
    //     cursor: "not-allowed",
    //   }),
    //   false: {},
    // },
    // center: {
    //   true: atoms({
    //     position: "relative",
    //   }),
    //   false: {},
    // },
    columns,
  },
});

export type Variants = RecipeVariants<typeof variants>;
