const fonts = {
  sans: `var(--font-sans), system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  mono: `var(--font-mono), Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  serif: `var(--font-serif), Georgia, Cambria, "Times New Roman", Times, serif`,
};

const fontSizes = {
  headingHero: "3.625rem",
  headingOne: "2.325rem",
  headingTwo: "1.875rem",
  headingThree: "1.5rem",
  large: "1.1875rem",
  base: "1rem",
  small: "0.875rem",
  extraSmall: "0.75rem",
  extraExtraSmall: "0.625rem",
  label: "0.8125rem",
};

const fontWeights = {
  light: "300",
  normal: "400",
  medium: "500",
  semiBold: "550",
  bold: "650",
};

const letterSpacings = {
  "-0.02": "-0.02em",
  "-0.015": "-0.015em",
  "-0.01": "-0.01em",
  normal: "0",
  "0.03": "0.03em",
};

const lineHeights = {
  normal: "normal",
  none: "none",
  "1.25": "1.25", // tight
  "1.375": "1.375", // snug
  "1.5": "1.5", // normal
  "1.625": "1.625", // relaxed
  "2": "2", // loose
};

export const typography = {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
};
