import { violet, blackA } from "@radix-ui/colors";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";

import { CSS, VariantProps, styled } from "./stitches.config";

const DEFAULT_TAG = "div";

// STYLES
const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "100%",
  backgroundColor: blackA.blackA3,

  variants: {
    size: {
      "1": {
        width: "$6",
        height: "$6",
        fontSize: "$1",
      },
      "2": {
        width: "$7",
        height: "$7",
        fontSize: "$3",
      },
      "3": {
        width: "$9",
        height: "$9",
        fontSize: "$7",
      },
      "4": {
        width: "$10",
        height: "$10",
        fontSize: "$8",
      },
    },
  },

  defaultVariants: {
    size: "2",
  },
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$loContrast",
  color: violet.violet11,
  lineHeight: 1,
  fontWeight: 500,
});

// PROPS
export type AvatarProps = React.ComponentProps<typeof DEFAULT_TAG> &
  VariantProps<typeof StyledAvatar> & { as?: any; css?: CSS } & {
    alt?: string;
    fallback?: string;
    src?: string;
  };

// Exports
export const Avatar = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  AvatarProps
>((props, forwardedRef) => {
  // '2' here is the default heading size variant
  const { alt, fallback, src, ...styledAvatarProps } = props;

  return (
    <StyledAvatar
      {...styledAvatarProps}
      ref={forwardedRef}
      css={{
        // fontVariantNumeric: "proportional-nums",
        ...props.css,
      }}
    >
      <StyledImage src={src} alt={alt} />
      <StyledFallback delayMs={600}>{fallback}</StyledFallback>
    </StyledAvatar>
  );
});

Avatar.displayName = "Avatar";
