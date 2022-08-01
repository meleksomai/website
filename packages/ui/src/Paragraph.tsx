import React from "react";

import { VariantProps, CSS } from "./stitches.config";
import { Text } from "./Text";

const DEFAULT_TAG = "p";

type ParagraphCSSProp = { css?: CSS };
type ParagraphVariants = Omit<VariantProps<typeof Text>, "size">;

type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
  ParagraphCSSProp &
  ParagraphVariants;

export const Paragraph = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  ParagraphProps
>((props, forwardedRef) => (
  <Text
    as={DEFAULT_TAG}
    {...props}
    ref={forwardedRef}
    size={{
      initial: "3",
      bp2: "4",
    }}
    css={{
      paddingTop: "$2",
      paddingBottom: "$2",
      lineHeight: "25px",
      ...props.css,

      when: {
        ...(props.css?.when as any),
        bp2: {
          lineHeight: "27px",
          ...((props.css?.when as any)?.bp2 as any),
        },
      },
    }}
  />
));

Paragraph.displayName = "Paragraph";
