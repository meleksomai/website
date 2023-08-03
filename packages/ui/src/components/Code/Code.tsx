"use client";

import { Copy } from "@phosphor-icons/react";
import clsx from "clsx";
import Highlight, {
  Language,
  PrismTheme,
  defaultProps,
} from "prism-react-renderer";

import * as styles from "./Code.css";

import { vars } from "../../theme";
import { Box, BoxProps } from "../Box";
import { Button } from "../Button";
import { Stack } from "../Stack";

type Props = {
  backgroundColor?: BoxProps["backgroundColor"];
  children: string;
  className: string;
  copy?: boolean;
  expand?: boolean;
  language?: Language;
  numberLines?: boolean;
  title?: string;
};

export const Code = ({
  backgroundColor,
  children,
  className,
  copy = false,
  expand,
  language = "typescript",
  numberLines = false,
  title,
}: Props) => {
  const modifiedTheme: PrismTheme = {
    styles: [
      {
        types: ["comment", "prolog", "doctype", "cdata"],
        style: {
          color: vars.color.slate9,
          // fontStyle: "italic",
        },
      },
      {
        types: ["namespace"],
        style: {
          opacity: 0.7,
        },
      },
      {
        types: ["string", "attr-value"],
        style: {
          color: vars.color.greenA10,
        },
      },
      {
        types: ["punctuation", "operator"],
        style: {
          color: vars.color.mauve10,
        },
      },
      {
        types: [
          "entity",
          "url",
          "symbol",
          "boolean",
          "variable",
          "constant",
          "property",
          "regex",
          "inserted",
        ],
        style: {
          color: vars.color.yellow10,
        },
      },
      {
        types: ["number"],
        style: {
          color: vars.color.green10,
        },
      },
      {
        types: ["atrule", "keyword", "attr-name", "selector"],
        style: {
          color: vars.color.blue10,
        },
      },
      {
        types: ["function", "deleted", "tag"],
        style: {
          color: "#d73a49",
        },
      },
      {
        types: ["function-variable"],
        style: {
          color: "#6f42c1",
        },
      },
      {
        types: ["tag", "selector", "keyword"],
        style: {
          color: vars.color.blueA10,
        },
      },
    ],
    plain: {
      color: vars.color.primary,
      backgroundColor: vars.color.background,
    },
  };

  const copyContent = () => {
    navigator.clipboard.writeText(children);
  };

  const code = children.trim();
  return (
    <Box className={styles.base}>
      <Stack direction="row" justify="space-between">
        {/* TITLE */}
        {title && <Box className={styles.title}>{title}</Box>}

        {/* COPY */}
        {copy && (
          <Box display="flex" justifyContent="flex-end">
            <Button size="extraSmall" variant="simple" onClick={copyContent}>
              <Copy />
            </Button>
          </Box>
        )}
      </Stack>
      <Highlight
        {...defaultProps}
        code={code}
        language={language}
        theme={modifiedTheme}
      >
        {/* eslint-disable react/no-array-index-key */}
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <Box
            as="pre"
            className={clsx(className, styles.pre)}
            position="relative"
          >
            {/* CODE */}
            <Box as="code" className={styles.code}>
              {tokens.map((line, i) => (
                <Box
                  key={i}
                  paddingRight="2000"
                  {...getLineProps({ line, key: i })}
                >
                  {numberLines && (
                    <Box
                      as="span"
                      width="300"
                      fontFamily="mono"
                      color="slate9"
                      paddingRight="300"
                      userSelect="none"
                    >
                      {i + 1}
                    </Box>
                  )}
                  {line.map((token, key) => (
                    <Box
                      as="span"
                      fontFamily="mono"
                      key={key}
                      {...getTokenProps({ token, key })}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Highlight>
    </Box>
  );
};
