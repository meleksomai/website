import { style } from "@vanilla-extract/css";

import { atoms } from "../../atoms";

export const base = style([
  atoms({
    backgroundColor: "slate4",
    borderRadius: "medium",
    padding: "100",
  }),
]);

export const pre = style([
  atoms({
    fontFamily: "mono",
    fontSize: "small",
    lineHeight: "1.5",
    color: "slate11",
    overflow: "auto",
    backgroundColor: "slate4",
    borderRadius: "medium",
    paddingX: "400",
    paddingY: "200",
  }),
  style({
    whiteSpace: "pre",
    position: "relative",
    overflow: "auto",
  }),
]);

export const title = style([
  atoms({
    color: "slate11",
    fontSize: "label",
    paddingX: "400",
    fontWeight: "medium",
  }),
]);

export const code = style([
  atoms({
    fontFamily: "mono",
  }),
]);
