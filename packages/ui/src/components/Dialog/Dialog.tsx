"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

import * as styles from "./Dialog.css";

export type DialogProps = {
  children?: React.ReactNode;
} & DialogPrimitive.DialogProps;

export const Content = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={styles.overlay} />
      <DialogPrimitive.Content
        className={styles.content}
        {...props}
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

Content.displayName = DialogPrimitive.Content.displayName;

const Root = DialogPrimitive.Root;
const Title = DialogPrimitive.Title;
const Close = DialogPrimitive.Close;
const Description = DialogPrimitive.Description;
const Trigger = DialogPrimitive.Trigger;

export const Dialog = {
  Root,
  Content,
  Title,
  Close,
  Description,
  Trigger,
};
