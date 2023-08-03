"use client";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import React from "react";

import * as styles from "./Avatar.css";

const DEFAULT_TAG = "div";

export interface AvatarProps {
  alt: string;
  fallback: string;
  size: styles.Size;
  src: string;
}

// Exports
export const Avatar = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  AvatarProps
>(({ alt, fallback, size = "medium", src }, forwardedRef) => {
  return (
    <AvatarPrimitive.Root
      // {...styledAvatarProps}
      className={styles.root({
        size,
      })}
      ref={forwardedRef}
    >
      <AvatarPrimitive.Image className={styles.Image} src={src} alt={alt} />
      <AvatarPrimitive.Fallback className={styles.Fallback} delayMs={600}>
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
});

Avatar.displayName = "Avatar";
