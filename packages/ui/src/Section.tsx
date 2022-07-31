import { styled } from "./stitches.config";

export const Section = styled("section", {
  // Reset
  boxSizing: "border-box",
  flexShrink: 0,
  "&::before": {
    boxSizing: "border-box",
    content: '""',
  },
  "&::after": {
    boxSizing: "border-box",
    content: '""',
  },

  variants: {
    size: {
      "0": {
        paddingTop: "$1",
        paddingBottom: "$1",
      },
      "1": {
        paddingTop: "$3",
        paddingBottom: "$3",
      },
      "2": {
        paddingTop: "$5",
        paddingBottom: "$5",
      },
      "3": {
        paddingTop: "$9",
        paddingBottom: "$9",
      },
    },
  },
  defaultVariants: {
    size: "1",
  },
});
