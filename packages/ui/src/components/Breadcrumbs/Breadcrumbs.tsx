import { ReactNode } from "react";

import * as styles from "./Breadcrumbs.css";

import { Box } from "../Box";
import { Link } from "../Link";
import { Text } from "../Text";

// defining the Props
export type CrumbItem = {
  label: ReactNode; // e.g., Python
  path?: string; // e.g., /development/programming-languages/python
};

export type BreadcrumbsProps = {
  items: CrumbItem[];
};

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <Box>
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem && crumb.path) {
          return (
            <>
              <Link href={crumb.path} key={i} variant="secondary">
                {crumb.label}
              </Link>
              {/* separator */}
              <Box as="span" className={styles.separator}>
                {" "}
                /{" "}
              </Box>
            </>
          );
        } else if (!isLastItem && !crumb.path) {
          return (
            <>
              <Text as="span" key={i} color="slate11">
                {crumb.label}
              </Text>
              {/* separator */}
              <Box as="span" className={styles.separator}>
                {" "}
                /{" "}
              </Box>
            </>
          );
        } else {
          return (
            <Text as="span" key={i} color="slate11">
              {crumb.label}
            </Text>
          );
        }
      })}
    </Box>
  );
};
