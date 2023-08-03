import { border } from "./border";
import { breakpoints } from "./breakpoint";
import { colors } from "./color";
import { grid } from "./grid";
import { opacity } from "./opacity";
import { shadow } from "./shadow";
import { spaces } from "./space";
import { typography } from "./typography";

export const tokens = {
  // Border
  border,
  // Breakpoints
  breakpoints,
  // Colors
  colors,
  // Grid
  grid,
  // Opacity
  opacity,
  // Shadow
  shadow,
  // Spaces
  spaces,
  // Typography
  typography,
};

export type { Accent, Mode } from "./color";
export type Tokens = typeof tokens;
export type { Breakpoint } from "./breakpoint";
export type { Radii } from "./border";
