import NextImage, { ImageProps as NextImageProps } from "next/image";
import * as React from "react";

import * as styles from "./Image.css";

import { Box } from "../Box";

export type ImageProps = {
  // bold?: boolean;
} & NextImageProps;

export const Image = React.forwardRef<any, ImageProps>((props, ref) => {
  return (
    <Box as="figure" className={styles.figure}>
      <NextImage ref={ref} {...props} className={styles.image} />
    </Box>
  );
});

Image.displayName = "Image";
