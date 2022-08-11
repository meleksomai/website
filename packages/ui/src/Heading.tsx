import React from "react";

import { VariantProps, CSS } from "./stitches.config";
import { Text } from "./Text";

const DEFAULT_TAG = "h1";

// Text Component extracted Props
type TextSizeVariants = Pick<VariantProps<typeof Text>, "size">;

// Heading Component custom Props
type HeadingSizeVariants = "1" | "2" | "3" | "4";
type HeadingVariants = {
  // Replacing the Text Props with Heading custom Props
  size?: HeadingSizeVariants;
} & Omit<VariantProps<typeof Text>, "size">;

// Heading Props
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { as?: any; css?: CSS };

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  // '2' here is the default heading size variant
  const { size = "1", variant = "black", ...textProps } = props;
  // This is the mapping of Heading Variants to Text variants
  const textSize: Record<HeadingSizeVariants, TextSizeVariants["size"]> = {
    1: { "@initial": "4", "@bp2": "5" },
    2: { "@initial": "6", "@bp2": "7" },
    3: { "@initial": "7", "@bp2": "8" },
    4: { "@initial": "8", "@bp2": "9" },
  };

  // This is the mapping of Heading Variants to Text css
  const textCss: Record<HeadingSizeVariants, CSS> = {
    1: { lineHeight: "23px", "@bp2": { lineHeight: "26px" } },
    2: { lineHeight: "25px", "@bp2": { lineHeight: "33px" } },
    3: { lineHeight: "36px", "@bp2": { lineHeight: "44px" } },
    4: { lineHeight: "44px", "@bp2": { lineHeight: "69px" } },
  };

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      variant={variant}
      css={{
        fontVariantNumeric: "proportional-nums",
        paddingTop: "$1",
        paddingBottom: "$1",
        ...textCss[size],
        ...props.css,
      }}
    />
  );
});

Heading.displayName = "Heading";
