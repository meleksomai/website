import * as React from "react";

import { Paragraph, styled } from "@thugga/ui";

const StyledUl = styled("ul", {
  py: "$1",
});

const StyledOl = styled("ol", {
  py: "$1",
});

const li = ({ children }: any) => (
  <li>
    <Paragraph>{children}</Paragraph>
  </li>
);

function List({ children, ordered }: any) {
  if (ordered) {
    return (
      <StyledUl>
        {Array.isArray(children)
          ? children?.map(({ props }: any) => li(props))
          : li(children.props)}
      </StyledUl>
    );
  }
  return (
    <StyledOl>
      {Array.isArray(children)
        ? children?.map(({ props }: any) => li(props))
        : li(children.props)}
    </StyledOl>
  );
}

export default List;
