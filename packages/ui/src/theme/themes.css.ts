import { createTheme } from "@vanilla-extract/css";

import { commonVars, vars } from "./vars.css";

import { Accent, Mode, tokens } from "../tokens";

// This is a bug.
// https://github.com/vanilla-extract-css/vanilla-extract/issues/369
const DEBUG_ID = "my-custom-debug-id";

export type Theme = {
  border: typeof tokens.border;
  breakpoints: typeof tokens.breakpoints;
  color: {
    background: string;
    primary: string;
  } & { [key in Accent]: string } & typeof tokens.colors.base;
  grid: typeof tokens.grid;
  mode: Mode;
  opacity: typeof tokens.opacity;
  shadow: typeof tokens.shadow;
  spacing: typeof tokens.spaces;
  typography: typeof tokens.typography;
};

const lightTheme: Theme = {
  mode: "light",
  color: {
    background: tokens.colors.light.mauve2,
    primary: tokens.colors.light.slate12,
    ...tokens.colors.light,
    ...tokens.colors.base,
  },
  ...commonVars,
};

const lightThemeClass = createTheme(vars, lightTheme, DEBUG_ID);

const darkTheme: Theme = {
  mode: "dark",
  color: {
    background: tokens.colors.dark.mauve2,
    primary: tokens.colors.dark.slate12,
    ...tokens.colors.dark,
    ...tokens.colors.base,
  },
  ...commonVars,
};

const darkThemeClass = createTheme(vars, darkTheme, DEBUG_ID);

export { lightThemeClass, darkThemeClass };
