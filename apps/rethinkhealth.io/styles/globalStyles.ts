import {
  globalCss,
  darkTheme as rootDarkTheme,
  getCssText as rootGetCssText,
} from "@thugga/ui/src/stitches.config";

const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Inter",
      src: "url(/fonts/inter/Inter-Thin.woff2) format('woff2'), url(/fonts/inter/Inter-Thin.woff) format('woff')",
      fontWeight: "300",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Inter",
      src: "url(/fonts/inter/Inter-Regular.woff2) format('woff2'), url(/fonts/inter/Inter-Regular.woff) format('woff')",
      fontWeight: "400",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Inter",
      src: "url(/fonts/inter/Inter-Medium.woff2) format('woff2'), url(/fonts/inter/Inter-Medium.woff) format('woff')",
      fontWeight: "500",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Inter",
      src: "url(/fonts/inter/Inter-Bold.woff2) format('woff2'), url(/fonts/inter/Inter-Bold.woff) format('woff')",
      fontWeight: "700",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Ibm Plex Mono",
      src: "url(/fonts/ibm/IBMPlexMono-Light.woff2) format('woff2'), url(/fonts/ibm/IBMPlexMono-Light.woff) format('woff')",
      fontWeight: "300",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Ibm Plex Mono",
      src: "url(/fonts/ibm/IBMPlexMono-Regular.woff2) format('woff2'), url(/fonts/ibm/IBMPlexMono-Regular.woff) format('woff')",
      fontWeight: "400",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Ibm Plex Mono",
      src: "url(/fonts/ibm/IBMPlexMono-Medium.woff2) format('woff2'), url(/fonts/ibm/IBMPlexMono-Medium.woff) format('woff')",
      fontWeight: "500",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Ibm Plex Mono",
      src: "url(/fonts/ibm/IBMPlexMono-Bold.woff2) format('woff2'), url(/fonts/ibm/IBMPlexMono-Bold.woff) format('woff')",
      fontWeight: "700",
      fontDisplay: "swap",
    },
  ],

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
    backgroundColor: "$colors$orange3",
    color: "$colors$orange11",
  },
});

export default globalStyles;
export const darkTheme = rootDarkTheme;
export const getCssText = rootGetCssText;
