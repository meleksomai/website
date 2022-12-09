import NxLink from "next/link";

import { LinkStyle, styled } from "@thugga/ui";

const NextLink = styled(NxLink, LinkStyle);
NextLink.displayName = "Link";

export { NextLink };
