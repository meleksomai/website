// Ensure reset has lowest specificity
/* DO NOT MOVE THIS LINE */
import "./reset.css";
/* DO NOT MOVE THIS LINE */

import { createVar } from "@vanilla-extract/css";
import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
// import { calc } from "@vanilla-extract/css-utils";

// using values from tokens due to CSS scoping issue when using `vars`
import { vars } from "../theme/vars.css";
import { tokens } from "../tokens";

const flexAlignment = ["flex-start", "center", "flex-end", "stretch"] as const;

const flexibility = [0, 1, 2, 3, 4] as const;

const extendedSpace = {
  "112": "28rem",
  "128": "32rem",
  "144": "36rem",
  "168": "42rem",
  "180": "45rem",
  "192": "48rem",
  "224": "56rem",
  "256": "64rem",
  "288": "72rem",
  "320": "80rem",
  "1/4": "25%",
  "1/3": "33.333333%",
  "1/2": "50%",
  "2/3": "66.666667%",
  "3/4": "75%",
  screenMobile: tokens.breakpoints.mobile,
  screenTablet: tokens.breakpoints.tablet,
  screenDesktop: tokens.breakpoints.desktop,
};

const responsiveProperties = defineProperties({
  defaultCondition: "mobile",
  conditions: {
    mobile: {},
    tablet: {
      "@media": `screen and (min-width: ${tokens.breakpoints.tablet})`,
    },
    desktop: {
      "@media": `screen and (min-width: ${tokens.breakpoints.desktop})`,
    },
  },
  properties: {
    alignItems: [...flexAlignment, "baseline"],
    alignSelf: [...flexAlignment, "baseline"],
    borderWidth: vars.border.widths,
    borderBottomWidth: vars.border.widths,
    borderLeftWidth: vars.border.widths,
    borderRightWidth: vars.border.widths,
    borderTopWidth: vars.border.widths,
    borderRadius: vars.border.radii,
    borderBottomLeftRadius: vars.border.radii,
    borderBottomRightRadius: vars.border.radii,
    borderTopLeftRadius: vars.border.radii,
    borderTopRightRadius: vars.border.radii,
    bottom: vars.spacing,
    gridTemplateColumns: vars.grid.columns,
    gridTemplateRows: vars.grid.rows,
    display: [
      "block",
      "flex",
      "grid",
      "inline-block",
      "inline",
      "inline-flex",
      "none",
      "contents",
      "initial",
    ],
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexBasis: {
      ...vars.spacing,
      ...extendedSpace,
    },
    flexDirection: ["column", "row"],
    flexGrow: flexibility,
    flexShrink: flexibility,
    flexWrap: ["wrap", "nowrap"],
    fontSize: {
      ...vars.typography.fontSizes,
      inherit: "inherit",
    },
    fontWeight: vars.typography.fontWeights,
    gap: vars.spacing,
    height: vars.spacing,
    inset: vars.spacing,
    justifyContent: [...flexAlignment, "space-around", "space-between"],
    justifySelf: flexAlignment,
    left: vars.spacing,
    letterSpacing: vars.typography.letterSpacings,
    lineHeight: vars.typography.lineHeights,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    maxHeight: vars.spacing,
    maxWidth: {
      ...vars.spacing,
      ...extendedSpace,
      none: "none",
    },
    minHeight: vars.spacing,
    minWidth: vars.spacing,
    overflow: ["auto", "hidden", "scroll", "unset"],
    overflowX: ["auto", "hidden", "scroll", "unset"],
    overflowY: ["auto", "hidden", "scroll", "unset"],
    WebkitOverflowScrolling: ["touch", "auto", "unset", "inherit"],
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    position: ["absolute", "fixed", "relative", "sticky"],
    right: vars.spacing,
    textAlign: ["center", "left", "right"],
    top: vars.spacing,
    visibility: ["hidden", "visible"],
    width: {
      ...vars.spacing,
      ...extendedSpace,
    },
  },
  shorthands: {
    borderLeftRadius: ["borderBottomLeftRadius", "borderTopLeftRadius"],
    borderRightRadius: ["borderBottomRightRadius", "borderTopRightRadius"],
    borderTopRadius: ["borderTopLeftRadius", "borderTopRightRadius"],
    borderBottomRadius: ["borderBottomLeftRadius", "borderBottomRightRadius"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    columns: ["gridTemplateColumns"],
    rows: ["gridTemplateRows"],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    aspectRatio: {
      auto: "auto",
      "1/1": "1 / 1",
      "2/1": "2 / 1",
      "4/1": "4 / 1",
      "4/3": "4 / 3",
      "16/9": "16 / 9",
    },
    cursor: ["default", "pointer", "not-allowed"],
    fontFamily: vars.typography.fonts,
    isolation: ["isolate"],
    objectFit: ["contain", "cover"],
    opacity: vars.opacity,
    pointerEvents: ["none"],
    strokeWidth: vars.border.widths,
    textTransform: ["capitalize", "lowercase", "uppercase"],
    transitionProperty: {
      none: "none",
      all: "all",
      default:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      inOut: "cubic-bezier(0.42, 0, 0.58, 1)",
    },
    userSelect: ["none"],
    whiteSpace: [
      "normal",
      "nowrap",
      "pre",
      "pre-line",
      "pre-wrap",
      "initial",
      "inherit",
    ],
    wordBreak: ["break-word"],
    wordWrap: ["normal", "break-word", "initial", "inherit"],
    zIndex: {
      "0": 0,
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50,
      "75": 75,
      "100": 100,
      auto: "auto",
    },
  },
});

const boxShadowColorVar = createVar();

const selectorProperties = defineProperties({
  conditions: {
    base: {},
    active: { selector: "&:active" },
    focus: { selector: "&:focus" },
    hover: { selector: "&:hover" },
  },
  defaultCondition: "base",
  properties: {
    backgroundColor: vars.color,
    borderColor: vars.color,
    boxShadow: {
      "1": {
        vars: { [boxShadowColorVar]: vars.color.primary }, // replace with primarySecondary
        boxShadow: `${vars.shadow["1"]} ${boxShadowColorVar}`,
      },
      "0.5": {
        vars: { [boxShadowColorVar]: vars.color.primary },
        boxShadow: `${vars.shadow["0.5"]} ${boxShadowColorVar}`,
      },
      "0": {
        vars: { [boxShadowColorVar]: vars.color.primary },
        boxShadow: `${vars.shadow["0"]} ${boxShadowColorVar}`,
      },
      "-px": {
        vars: { [boxShadowColorVar]: vars.color.primary },
        boxShadow: `${vars.shadow["-px"]} ${boxShadowColorVar}`,
      },
      bottom: {
        vars: { [boxShadowColorVar]: vars.color.primary },
        boxShadow: `${vars.shadow["bottom"]} ${boxShadowColorVar}`,
      },
      right: {
        vars: { [boxShadowColorVar]: vars.color.primary },
        boxShadow: `${vars.shadow["right"]} ${boxShadowColorVar}`,
      },
    },
    boxShadowColor: {
      slate: {
        vars: { [boxShadowColorVar]: vars.color.slate4 },
      },
      transparent: {
        vars: { [boxShadowColorVar]: vars.color.transparent },
      },
    },
    textDecorationLine: [
      "none",
      "underline",
      "overline",
      "line-through",
      "blink",
      "initial",
    ],
    textDecorationColor: vars.color,
    color: vars.color,
    outlineColor: vars.color,
  },
  shorthands: {
    textDecoration: ["textDecorationLine"],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  selectorProperties
  // motionSafeProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
