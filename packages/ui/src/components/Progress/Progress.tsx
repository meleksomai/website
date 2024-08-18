import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import * as styles from "./Progress.css";

export type ProgressProps = {
  id?: string;
  progress: number;
  size?: styles.Size;
} & styles.RootVariants;

export const Progress = ({ id, progress = 0 }: ProgressProps) => {
  return (
    <ProgressPrimitive.Root
      id={id}
      className={styles.rootVariants({
        // size,
      })}
    >
      <ProgressPrimitive.Indicator
        className={styles.indicatorVariants({
          // size,
        })}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressPrimitive.Root>
  );
};
