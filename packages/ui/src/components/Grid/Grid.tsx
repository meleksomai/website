import React from "react";

import * as styles from "./Grid.css";

import { Atoms } from "../../atoms";
import { Box, BoxProps } from "../Box";

export interface GridProps {
  align?: BoxProps["alignItems"];
  area?: string;
  areas?: string[];
  autoColumns?: string;
  autoRows?: string;
  children: React.ReactNode;
  columns?: styles.Columns;
  gap?: Atoms["gap"];
  grid?: string;
  // place?: Atoms["placeContent"];
  rows?: string[];
  width?: BoxProps["width"];
}

export const Grid = React.forwardRef<HTMLElement, GridProps>((props, ref) => {
  const {
    align,
    gap,
    grid,
    area,
    areas,
    columns,
    children,
    rows,
    autoRows,
    autoColumns,
    width,
    // place,
    ...restProps
  } = props;

  return (
    <Box
      alignItems={align}
      width={width}
      ref={ref}
      gap={gap}
      // placeContent={place}
      display="grid"
      className={styles.variants({
        columns,
        // disabled: boxProps.disabled,
        // // shape,
        // size,
        // // tone,
        // variant,
      })}
      {...restProps}
    >
      {children}
    </Box>
  );
});

Grid.displayName = "Grid";
