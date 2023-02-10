import React from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

const Skeleton = (props: IContentLoaderProps) => (
  <ContentLoader viewBox="0 0 600 400" height={800} width={600} {...props}>
    <rect x="0" y="13" rx="4" ry="4" width="600" height="300" />
    <rect x="0" y="329" rx="4" ry="4" width="100" height="8" />
    <rect x="0" y="50" rx="4" ry="4" width="600" height="10" />
    <rect x="0" y="65" rx="4" ry="4" width="600" height="10" />
    <rect x="0" y="79" rx="4" ry="4" width="100" height="10" />
    <rect x="0" y="99" rx="5" ry="5" width="600" height="200" />
  </ContentLoader>
);

export default Skeleton;
