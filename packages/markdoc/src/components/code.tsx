import Highlight, { defaultProps, Language } from "prism-react-renderer";
import ghTheme from "prism-react-renderer/themes/github";
import * as React from "react";

import { styled, Text } from "@thugga/ui";

export interface CodeBlockProps {
  [key: string]: any;
  content: string;
  language: string;
  theme?: "dark" | "light";
}

const Pre = styled("pre", {
  // Adding custom styles to the Pre component
  margin: "1em 0",
  overflow: "scroll",
  padding: "0.5em",
  textAlign: "left",
});

const Line = styled(Text, {
  display: "table-row",
});

const LineNo = styled("span", {
  display: "table-cell",
  fontSize: "0.75em",
  opacity: 0.5,
  paddingRight: "1em",
  textAlign: "right",
  userSelect: "none",
  fontFamily: "$sans",
});

const LineContent = styled("span", {
  display: "table-cell",
  fontFamily: "$mono",
});

function CodeBlock({ content, language, theme }: CodeBlockProps) {
  const [codeTheme] = React.useState(ghTheme);

  return (
    <Highlight
      {...defaultProps}
      theme={codeTheme}
      code={content?.trim()}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })} mono>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ key, token })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
}

export default CodeBlock;
