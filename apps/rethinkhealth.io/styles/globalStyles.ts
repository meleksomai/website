import {
  globalCss,
  darkTheme as rootDarkTheme,
  getCssText as rootGetCssText,
} from "@thugga/ui/src/stitches.config";

const globalStyles = globalCss({
  // ...other styles
  // html: {
  //   overflowX: "hidden",
  //   scrollPaddingTop: "6rem",
  // },
  // "*, *::before, *::after": {
  //   boxSizing: "border-box",
  // },
  body: {
    margin: 0,
    color: "$hiContrast",
    backgroundColor: "$loContrast",
    fontFamily: "$sans",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    WebkitTextSizeAdjust: "100%",
  },
  svg: {
    display: "block",
    verticalAlign: "middle",
  },
  "pre, code": { margin: 0, fontFamily: "$mono" },
  "::selection": {
    backgroundColor: "$colors$blue3",
    // color: "$colors$blue12",
  },
});

export default globalStyles;
export const darkTheme = rootDarkTheme;
export const getCssText = rootGetCssText;
