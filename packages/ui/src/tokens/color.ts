import * as rc from "@radix-ui/colors";

export type Mode = "light" | "dark";

export type Accent =
  | keyof typeof rc.violetA
  | keyof typeof rc.violet
  | keyof typeof rc.gray
  | keyof typeof rc.grayA
  | keyof typeof rc.blackA
  | keyof typeof rc.blue
  | keyof typeof rc.blueA
  | keyof typeof rc.yellow
  | keyof typeof rc.yellowA
  | keyof typeof rc.red
  | keyof typeof rc.redA
  | keyof typeof rc.slate
  | keyof typeof rc.slateA
  | keyof typeof rc.bronze
  | keyof typeof rc.bronzeA
  | keyof typeof rc.mauve
  | keyof typeof rc.mauveA
  | keyof typeof rc.green
  | keyof typeof rc.greenA
  | "editor";

const accents: { [key in Mode]: { [key in Accent]: string } } = {
  light: {
    ...rc.violet,
    ...rc.violetA,
    ...rc.gray,
    ...rc.grayA,
    ...rc.blackA,
    ...rc.blue,
    ...rc.yellow,
    ...rc.red,
    ...rc.slate,
    ...rc.bronze,
    ...rc.mauve,
    ...rc.green,
    // Accentuated colors
    ...rc.blueA,
    ...rc.yellowA,
    ...rc.redA,
    ...rc.slateA,
    ...rc.bronzeA,
    ...rc.mauveA,
    ...rc.greenA,
    // Custom colors
    ...{
      editor: "#f6f6f6",
    },
  },
  dark: {
    ...rc.violetDark,
    ...rc.violetDarkA,
    ...rc.grayDark,
    ...rc.grayDarkA,
    ...rc.blackA,
    ...rc.blueDark,
    ...rc.yellowDark,
    ...rc.redDark,
    ...rc.slateDark,
    ...rc.bronzeDark,
    ...rc.mauveDark,
    ...rc.greenDark,
    // Accentuated colors
    ...rc.blueDarkA,
    ...rc.yellowDarkA,
    ...rc.redDarkA,
    ...rc.slateDarkA,
    ...rc.bronzeDarkA,
    ...rc.mauveDarkA,
    ...rc.greenDarkA,
    // Custom colors
    ...{
      editor: "#151515",
    },
  },
};

export const colors = {
  base: {
    black: "rgb(0, 0, 0)",
    white: "rgb(255, 255, 255)",
    current: "currentColor",
    inherit: "inherit",
    transparent: "transparent",
  },
  light: accents.light,
  dark: accents.dark,
};
