"use client";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import * as styles from "./ScrollArea.css";

export const ScrollArea = ({ children }: React.PropsWithChildren) => {
  return (
    <ScrollAreaPrimitive.Root className={styles.root}>
      <ScrollAreaPrimitive.Viewport className={styles.viewport}>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        orientation="vertical"
        className={styles.scrollbar}
      >
        <ScrollAreaPrimitive.Thumb className={styles.scrollbarThumb} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        orientation="horizontal"
        className={styles.scrollbar}
      >
        <ScrollAreaPrimitive.Thumb className={styles.scrollbarThumb} />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner className={styles.corner} />
    </ScrollAreaPrimitive.Root>
  );
};

ScrollArea.displayName = "ScrollArea";
