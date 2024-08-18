import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

import { atoms, Atoms, extractAtoms } from "../../atoms/atoms";

export interface BoxProps extends Omit<Atoms, "reset"> {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  asChild?: boolean;
  children?: React.ReactNode;
  id?: string;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    { as: Component = "div", asChild = false, width = "full", ...other },
    ref,
  ) => {
    const [atomsProps, propsToForward] = extractAtoms(other);
    const className = atoms({
      className: propsToForward.className,
      reset: typeof Component === "string" ? Component : "div",
      width: width,
      ...atomsProps,
    });

    const Comp = asChild ? Slot : Component;

    return <Comp {...propsToForward} className={className} ref={ref} />;
  },
);

Box.displayName = "Box";
