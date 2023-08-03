import { style } from "@vanilla-extract/css";

import { atoms } from "../../atoms";

export const trigger = style([
  atoms({
    alignItems: "center",
    display: "inline-flex",
    justifyContent: "center",
    borderRadius: "medium",
    paddingY: "200",
    lineHeight: "normal",
    height: "350",
    gap: "500",
    backgroundColor: {
      base: "slate4",
      hover: "blue5",
    },
    // boxShadow: "1",
    // boxShadowColor: ""
    color: "slate11",
  }),
]);

export const content = style([
  atoms({
    overflow: "hidden",
    backgroundColor: "blue8",
    borderRadius: "medium",
  }),
  style({
    boxShadow:
      "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
  }),
]);

export const viewport = style([
  atoms({
    padding: "500",
  }),
]);

export const item = style([
  atoms({
    color: "blue11",
    borderRadius: "medium",
    display: "flex",
    alignItems: "center",
    height: "250",
    paddingTop: "250",
    paddingBottom: "350",
    position: "relative",
  }),
  style({
    userSelect: "none",
  }),
]);

// const StyledItem = styled(SelectPrimitive.Item, {
//   all: "unset",
//   fontSize: 13,
//   lineHeight: 1,
//   color: "$colors$blue11",
//   borderRadius: 3,
//   display: "flex",
//   alignItems: "center",
//   height: 25,
//   padding: "0 35px 0 25px",
//   position: "relative",
//   userSelect: "none",

//   "&[data-disabled]": {
//     color: "$colors$blue8",
//     pointerEvents: "none",
//   },

//   "&:focus": {
//     backgroundColor: "$colors$blue9",
//     color: "$colors$blue1",
//   },
// });

export const label = style([
  atoms({
    paddingY: "250",
    color: "slate11",
  }),
]);

export const separator = style([
  atoms({
    backgroundColor: "blue6",
    margin: "50",
  }),
]);

export const indicator = style([
  atoms({
    position: "absolute",
    left: "0",
    width: "250",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }),
]);

export const scroll = style([
  atoms({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "250",
    backgroundColor: "white",
    color: "blue11",
    cursor: "default",
  }),
]);
