import { createThemeContract } from "@vanilla-extract/css";

import type { Theme } from "./themes.css";

import { tokens } from "../tokens";

export const commonVars: Omit<Theme, "color" | "mode"> = {
  border: tokens.border,
  breakpoints: tokens.breakpoints,
  spacing: tokens.spaces,
  typography: tokens.typography,
  opacity: tokens.opacity,
  shadow: tokens.shadow,
  grid: tokens.grid,
};

const defaultTheme: Theme = {
  mode: "" as any,
  color: {
    background: "",
    primary: "",
    ...tokens.colors.light,
    ...tokens.colors.base,
  },
  ...commonVars,
};

export const vars = createThemeContract(defaultTheme);
