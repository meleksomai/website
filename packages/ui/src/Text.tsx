import { styled } from "./stitches.config";

export const Text = styled("span", {
  // Reset
  lineHeight: "1.68",
  margin: "0",
  fontWeight: 400,
  fontVariantNumeric: "tabular-nums",
  display: "block",

  variants: {
    mono: {
      true: {
        fontFamily: "$mono",
      },
    },
    serif: {
      true: {
        fontFamily: "$serif",
      },
    },
    inline: {
      true: {
        display: "inline",
      },
    },
    bold: {
      true: {
        fontWeight: 500,
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    size: {
      "1": {
        fontSize: "$1",
      },
      "2": {
        fontSize: "$2",
      },
      "3": {
        fontSize: "$3",
      },
      "4": {
        fontSize: "$4",
      },
      "5": {
        fontSize: "$5",
        letterSpacing: "-.015em",
      },
      "6": {
        fontSize: "$6",
        letterSpacing: "-.016em",
      },
      "7": {
        fontSize: "$7",
        letterSpacing: "-.031em",
        textIndent: "-.005em",
      },
      "8": {
        fontSize: "$8",
        letterSpacing: "-.034em",
        textIndent: "-.018em",
      },
      "9": {
        fontSize: "$9",
        letterSpacing: "-.055em",
        textIndent: "-.025em",
      },
    },
    variant: {
      hightlight: {
        color: "$highlight",
      },
      red: {
        color: "$red11",
      },
      black: {
        color: "$mauve12",
      },
      light: {
        color: "$mauve11",
      },
      // pink: {
      //   color: "$pink11",
      // },
      // purple: {
      //   color: "$purple11",
      // },
      // violet: {
      //   color: "$violet11",
      // },
      // indigo: {
      //   color: "$indigo11",
      // },
      blue: {
        color: "$blue11",
      },
      // cyan: {
      //   color: "$cyan11",
      // },
      // teal: {
      //   color: "$teal11",
      // },
      // green: {
      //   color: "$green11",
      // },
      // lime: {
      //   color: "$lime11",
      // },
      // yellow: {
      //   color: "$yellow11",
      // },
      orange: {
        color: "$orange11",
      },
      // gold: {
      //   color: "$gold11",
      // },
      // bronze: {
      //   color: "$bronze11",
      // },
      // gray: {
      //   color: "$slate11",
      // },
      contrast: {
        color: "$hiContrast",
      },
    },
  },
  defaultVariants: {
    size: "3",
    variant: "contrast",
  },
});
