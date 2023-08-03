export const breakpoints = {
  mobile: "0px",
  tablet: "768px",
  desktop: "1280px",
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];
