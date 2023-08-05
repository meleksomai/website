import { style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";

const size = {
  hero: style([
    atoms({
      fontSize: "headingHero",
      letterSpacing: "-0.02",
    }),
  ]),
  h1: style([
    atoms({
      fontSize: "headingOne",
    }),
    style({
      lineHeight: "3rem",
    }),
  ]),
  h2: style([
    atoms({
      fontSize: "headingTwo",
      lineHeight: "1.25",
    }),
  ]),
  h3: style([
    atoms({
      fontSize: "headingThree",
      lineHeight: "1.25",
    }),
  ]),
  h4: style([
    atoms({
      fontSize: "large",
      lineHeight: "1.25",
    }),
  ]),
  p: style([
    atoms({
      fontSize: "base",
      lineHeight: "1.5",
    }),
  ]),
};

export type Size = keyof typeof size;

export const variants = recipe({
  variants: {
    size,
    responsive: {
      true: {},
      false: {},
    },
    mono: {
      true: atoms({
        fontFamily: "mono",
      }),
    },
    bold: {
      true: atoms({
        fontWeight: "semiBold",
      }),
      false: atoms({
        fontWeight: "normal",
      }),
    },
    serif: {
      true: atoms({
        fontFamily: "serif",
      }),
    },
    inline: {
      true: atoms({
        display: "inline",
      }),
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "h1",
        responsive: true,
      },
      style: atoms({
        fontSize: { mobile: "headingTwo", tablet: "headingOne" },
      }),
    },
    {
      variants: {
        size: "h2",
        responsive: true,
      },
      style: atoms({
        fontSize: { mobile: "large", tablet: "headingTwo" },
      }),
    },
    {
      variants: {
        size: "h3",
        responsive: true,
      },
      style: atoms({
        fontSize: "large",
      }),
    },
  ],
});

export type Variants = RecipeVariants<typeof variants>;
