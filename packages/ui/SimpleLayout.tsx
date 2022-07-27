import * as React from "react";

import { Container } from "./Container";

export interface SimpleLayoutProps {
  title?: string;
}

export const SimpleLayout = (props: React.PropsWithChildren<SimpleLayoutProps>) => {
  return(
    <Container size="2">
      {props.children}
    </Container>
  );
};
