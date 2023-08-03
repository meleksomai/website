"use client";

import { Command } from "cmdk";
import * as React from "react";

import * as styles from "./CmdK.css";

import { Box } from "../Box";
import { Dialog as DialogPrimitive, DialogProps } from "../Dialog";
import { Stack } from "../Stack";

export type CmdKProps = {
  children?: React.ReactNode;
};

const Root = React.forwardRef<
  React.ElementRef<typeof Command>,
  React.ComponentPropsWithoutRef<typeof Command>
>(({ ...props }, ref) => (
  <Command className={styles.root} ref={ref} {...props} />
));
Root.displayName = Command.displayName;

type CmdKDialogProps = DialogProps & {
  trigger?: React.ReactNode;
};

const Dialog = ({ children, trigger, ...props }: CmdKDialogProps) => {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Trigger asChild>
        {trigger || <></>}
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Content>
        <Root>{children}</Root>
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
};

const Input = React.forwardRef<
  React.ElementRef<typeof Command.Input>,
  React.ComponentPropsWithoutRef<typeof Command.Input>
>(({ ...props }, ref) => (
  <Box asChild>
    <Command.Input className={styles.input} ref={ref} {...props} />
  </Box>
));

Input.displayName = Command.Input.displayName;

const List = React.forwardRef<
  React.ElementRef<typeof Command.List>,
  React.ComponentPropsWithoutRef<typeof Command.List>
>(({ children, ...props }, ref) => (
  <Command.List className={styles.list} ref={ref} {...props}>
    <Stack>{children}</Stack>
  </Command.List>
));

List.displayName = Command.List.displayName;

const Empty = React.forwardRef<
  React.ElementRef<typeof Command.Empty>,
  React.ComponentPropsWithoutRef<typeof Command.Empty>
>(({ ...props }, ref) => (
  <Box className={styles.empty} asChild>
    <Command.Empty ref={ref} {...props} />
  </Box>
));

Empty.displayName = Command.Empty.displayName;

const Group = React.forwardRef<
  React.ElementRef<typeof Command.Group>,
  React.ComponentPropsWithoutRef<typeof Command.Group>
>(({ children, ...props }, ref) => (
  <Box className={styles.group} asChild>
    <Command.Group ref={ref} {...props}>
      <Box paddingTop="100">{children}</Box>
    </Command.Group>
  </Box>
));

Group.displayName = Command.Group.displayName;

const Item = React.forwardRef<
  React.ElementRef<typeof Command.Item>,
  React.ComponentPropsWithoutRef<typeof Command.Item>
>(({ children, ...props }, ref) => (
  <Box className={styles.item} asChild>
    <Command.Item ref={ref} {...props}>
      <Stack direction="row" space="300" align="center">
        {children}
      </Stack>
    </Command.Item>
  </Box>
));

Item.displayName = Command.Item.displayName;

export const CmdK = {
  Root,
  Dialog,
  Input,
  Empty,
  List,
  Group,
  Item,
};
