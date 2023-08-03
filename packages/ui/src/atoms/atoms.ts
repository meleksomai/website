import clsx from "clsx";
import { omit, pick } from "lodash";

import { baseReset, elementResets } from "./reset.css";
import { sprinkles, Sprinkles } from "./sprinkles.css";

export interface Atoms extends Sprinkles {
  className?: string | string[];
  reset?: keyof JSX.IntrinsicElements;
}

export function atoms(atoms: Atoms) {
  const { reset, className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return clsx(
    sprinklesClassNames,
    className,
    reset ? [baseReset, elementResets[reset]] : null
  );
}

const keys = Array.from(sprinkles.properties.keys());
export const extractAtoms = <P extends object>(props: P) => [
  pick(props, keys),
  omit(props, keys),
];
