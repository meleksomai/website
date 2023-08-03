import { style } from "@vanilla-extract/css";

import { atoms } from "../../atoms";
import { vars } from "../../theme/vars.css";

export const root = style([
  atoms({
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    borderRadius: {
      mobile: "none",
      tablet: "large",
      desktop: "large",
    },
    backgroundColor: "mauve5",
    // alignItems: "center",
    gap: "300",
    padding: "400",
    width: {
      mobile: "viewWidth",
      tablet: "500px",
      desktop: "500px",
    },
    height: {
      mobile: "viewHeight",
      tablet: "500px",
      desktop: "500px",
    },
  }),
]);

export const content = style([
  atoms({
    marginTop: "800",
    display: "flex",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // gap: "300",
    // padding: "400",
  }),
]);

export const input = style([
  atoms({
    display: "flex",
    height: "1100",
    width: "1100",
    paddingY: "300",
    backgroundColor: "mauve5",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // gap: "300",
    // padding: "400",
  }),
  style({
    outline: "none",
    border: "none",
  }),
]);

export const list = style([
  atoms({
    // display: "flex",
    overflow: "scroll",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // gap: "300",
    // padding: "400",
  }),
]);

export const empty = style([
  atoms({
    fontSize: "small",
    display: "flex",
    justifyContent: "flex-start",
    color: "mauve11",
    // alignItems: "center",
    // gap: "300",
  }),
]);

export const group = style([
  atoms({
    // display: "flex",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // gap: "300",
    // padding: "400",
    color: "gray10",
    fontSize: "label",
  }),
  style({
    selectors: {
      "&[hidden]": {
        display: "none",
      },
    },
  }),
]);

export const item = style([
  atoms({
    borderRadius: "medium",
    fontWeight: "normal",
    fontSize: "base",
    paddingX: "400",
    height: "1000",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    display: "flex",
    // transitionDuration: "",
    transitionProperty: "default",
    transitionTimingFunction: "inOut",
    backgroundColor: {
      base: "mauve5",
      hover: "mauve7",
      active: "mauve8",
    },
    color: {
      base: "mauve11",
      hover: "primary",
    },
  }),
  style({
    alignContent: "center",
    selectors: {
      "&[aria-selected=true]": {
        backgroundColor: vars.color.mauve7,
        color: vars.color.primary,
      },
    },
  }),
]);
