import * as React from "react";

import * as styles from "./Table.css";

import { Box, BoxProps } from "../Box";
import { Stack } from "../Stack";
import { Text, TextProps } from "../Text";

const Root = React.forwardRef<HTMLElement, React.PropsWithChildren>(
  ({ children, ...props }, ref) => (
    <Box as="table" ref={ref} {...props} className={styles.root}>
      {children}
    </Box>
  )
);

Root.displayName = "Tbody";

const Tbody = React.forwardRef<HTMLElement, React.PropsWithChildren>(
  ({ children, ...props }, ref) => (
    <Box as="tbody" ref={ref} {...props}>
      {children}
    </Box>
  )
);

Tbody.displayName = "Tbody";

const Tfoot = React.forwardRef<HTMLElement, React.PropsWithChildren>(
  ({ children, ...props }, ref) => (
    <Box as="tfoot" ref={ref} {...props}>
      {children}
    </Box>
  )
);

Tfoot.displayName = "Tfoot";

const Tr = React.forwardRef<HTMLElement, React.PropsWithChildren>(
  ({ children, ...props }, ref) => (
    <Box as="tr" ref={ref} {...props}>
      {children}
    </Box>
  )
);

Tr.displayName = "Tr";

export interface ThProps {
  center?: boolean;
  width?: BoxProps["width"];
}

const Th = React.forwardRef<HTMLElement, React.PropsWithChildren<ThProps>>(
  ({ children, center = false, width, ...props }, ref) => (
    <Box
      as="th"
      width={width}
      ref={ref}
      {...props}
      className={styles.th({
        center,
      })}
    >
      {children}
    </Box>
  )
);

Th.displayName = "Th";

export interface TdProps {
  center?: boolean;
}

const Td = React.forwardRef<HTMLElement, React.PropsWithChildren<TdProps>>(
  ({ children, center = false, ...props }, ref) => (
    <Box
      as="td"
      ref={ref}
      {...props}
      className={styles.td({
        center,
      })}
    >
      {children}
    </Box>
  )
);

Td.displayName = "Td";

const Thead = React.forwardRef<HTMLElement, React.PropsWithChildren>(
  ({ children, ...props }, ref) => (
    <Box as="thead" ref={ref} {...props} className={styles.thead}>
      {children}
    </Box>
  )
);

Thead.displayName = "Thead";

export const Table = {
  Root,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Thead,
};
