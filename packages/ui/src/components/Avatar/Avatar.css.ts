import { createVar, style } from "@vanilla-extract/css";
import { RecipeVariants, recipe } from "@vanilla-extract/recipes";

import { atoms } from "../../atoms";
import { vars } from "../../theme/vars.css";

const avatarSize = createVar();

const rootBase = style([
  atoms({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: "full",
    backgroundColor: "mauve4",
  }),
  style({
    verticalAlign: "middle",
    userSelect: "none",
    height: avatarSize,
    width: avatarSize,
  }),
]);

const size = {
  extraSmall: [
    {
      vars: {
        [avatarSize]: vars.spacing[800],
      },
    },
    atoms({
      fontSize: "label",
    }),
  ],
  small: [
    {
      vars: {
        [avatarSize]: vars.spacing["1000"],
      },
    },
    atoms({
      fontSize: "label",
    }),
  ],
  medium: [
    {
      vars: {
        [avatarSize]: vars.spacing["1200"],
      },
    },
    atoms({
      fontSize: "label",
    }),
  ],
  large: [
    {
      vars: {
        [avatarSize]: vars.spacing["1400"],
      },
    },
    atoms({
      fontSize: "label",
    }),
  ],
};

export type Size = keyof typeof size;

export const root = recipe({
  base: rootBase,
  variants: {
    size,
  },
});

export type Root = RecipeVariants<typeof root>;

export const Image = style([
  atoms({
    width: "full",
    height: "full",
    objectFit: "cover",
  }),
  style({
    borderRadius: "inherit",
  }),
]);

export const Fallback = style([
  atoms({
    width: "full",
    height: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "mauve4",
    color: "mauve12",
    fontWeight: "medium",
  }),
  style({
    borderRadius: "inherit",
  }),
]);

// const StyledFallback = styled(AvatarPrimitive.Fallback, {
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   backgroundColor: "$loContrast",
//   color: violet.violet11,
//   lineHeight: 1,
//   fontWeight: 500,
// });

// PROPS
// export type AvatarProps = React.ComponentProps<typeof DEFAULT_TAG> &
//   VariantProps<typeof StyledAvatar> & { as?: any; css?: CSS } & {
//     alt?: string;
//     fallback?: string;
//     src?: string;
//   };
