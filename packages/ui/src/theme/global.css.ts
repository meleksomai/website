import { globalStyle } from "@vanilla-extract/css";

import { vars } from "./vars.css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("*, ::before, ::after", {
  boxSizing: "border-box",
});

globalStyle("html, body", {
  margin: 0,
  height: "100vh",
  overflowX: "auto",
  scrollPaddingTop: vars.spacing[2800],
});

globalStyle("a", {
  textDecoration: "none",
});

globalStyle("body", {
  WebkitFontSmoothing: "antialiased",
  backgroundColor: vars.color.background,
  lineHeight: vars.typography.lineHeights["1.5"],
  overflow: "auto",
  height: vars.spacing.viewHeight,
  width: vars.spacing.viewWidth,
});

globalStyle("input, button, textarea, select", {
  font: "inherit",
});

globalStyle("p, h1, h2, h3, h4, h5, h6", {
  overflowWrap: "break-word",
});
