const borderStyles = {
  none: "none",
  solid: "solid",
};

const borderWidths = {
  "0": "0px",
  px: "1px",
  "0.375": "0.09375rem",
  "0.5": "0.125rem",
  "0.75": "0.1875rem",
  "1": "0.25rem",
  "2": "0.5rem",
};

const radii = {
  none: "0",
  small: "0.275rem",
  medium: "0.375rem",
  large: "0.5rem",
  extraLarge: "0.75rem",
  "2xLarge": "1rem",
  "3xLarge": "1.5rem",
  "4xLarge": "2.5rem",
  full: "9999px",
};

export const border = {
  styles: borderStyles,
  radii: radii,
  widths: borderWidths,
} as const;

export type Radii = keyof typeof radii;
