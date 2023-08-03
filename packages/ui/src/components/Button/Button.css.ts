import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";
import { vars } from "../../theme/vars.css";

const boxShadowColorVar = createVar();
const buttonSize = createVar();

const base = style([
  atoms({
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semiBold",
    cursor: "pointer",
    display: "flex",
    // transitionDuration: "",
    transitionProperty: "default",
    transitionTimingFunction: "inOut",
  }),
  style({
    height: buttonSize,
    alignContent: "center",
  }),
]);

const size = {
  extraSmall: [
    {
      vars: {
        [buttonSize]: vars.spacing[800],
      },
    },
    atoms({
      borderRadius: "small",
      fontSize: "label",
      paddingX: "350",
      gap: "200",
    }),
  ],
  small: [
    {
      vars: {
        [buttonSize]: vars.spacing["1000"],
      },
    },
    atoms({
      borderRadius: "small",
      fontSize: "base",
      paddingX: "300",
      gap: "200",
    }),
  ],
  base: [
    {
      vars: {
        [buttonSize]: vars.spacing["1000"],
      },
    },
    atoms({
      borderRadius: "small",
      fontSize: "base",
      paddingX: "300",
      gap: "200",
    }),
  ],
  medium: [
    {
      vars: {
        [buttonSize]: vars.spacing["1200"],
      },
    },
    atoms({
      borderRadius: "small",
      fontSize: "base",
      paddingX: "400",
      gap: "300",
    }),
  ],
  large: [
    {
      vars: {
        [buttonSize]: vars.spacing["1400"],
      },
    },
    atoms({
      borderRadius: "medium",
      fontSize: "large",
      paddingX: "500",
      gap: "400",
    }),
  ],
};

export type Size = keyof typeof size;

const variant = {
  primary: style([
    atoms({
      backgroundColor: {
        base: "mauve5",
        hover: "mauve7",
        active: "mauve8",
      },
      color: "primary",
    }),
  ]),
  secondary: style([
    atoms({
      color: {
        base: "mauve12",
        hover: "mauve11",
        active: "mauve10",
      },
    }),
    style({
      backgroundColor: "transparent",
      boxShadow: `${vars.shadow["0.5"]} ${boxShadowColorVar}`,
      vars: {
        [boxShadowColorVar]: vars.color.mauve12,
      },
      selectors: {
        "&:hover": {
          vars: {
            [boxShadowColorVar]: vars.color.mauve11,
          },
        },
        "&:active": {
          vars: {
            [boxShadowColorVar]: vars.color.mauve10,
          },
        },
      },
    }),
  ]),
  simple: style([
    atoms({
      backgroundColor: "transparent",
      color: {
        base: "mauve11",
        hover: "mauve12",
        active: "mauve10",
      },
    }),
  ]),
  accent: style([
    atoms({
      backgroundColor: {
        base: "blue10",
        hover: "blueA11",
        active: "blueA10",
      },
      color: "white",
    }),
  ]),
};

export type Variant = keyof typeof variant;

export const variants = recipe({
  base: base,
  variants: {
    disabled: {
      true: atoms({
        cursor: "not-allowed",
      }),
      false: {},
    },
    center: {
      true: atoms({
        position: "relative",
      }),
      false: {},
    },
    // shape,
    size,
    // tone,
    variant,
  },
});

export type Variants = RecipeVariants<typeof variants>;
