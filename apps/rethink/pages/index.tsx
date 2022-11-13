import { ArrowRightIcon } from "@radix-ui/react-icons";
import { GetStaticProps } from "next";
import * as React from "react";

import {
  Heading,
  Avatar,
  Section,
  Grid,
  Container,
  Text,
  Box,
  Flex,
  Paragraph,
} from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPosts, Post } from "../lib/essays";
import { getAllPublications, Publication } from "../lib/papers";

interface WebProps {
  recentPosts?: Post[];
  recentPublications?: Publication[];
}

export default function Web({ recentPublications, recentPosts }: WebProps) {
  return (
    <>
      <Box css={{ minHeight: '400px' }}>
        <Section size="2">
          <Heading as="p" size="3" mono css={{ color: "$mauve9" }}>
            Operating at the intersection of{" "}
            <Heading inline as="span" size="3" mono>
              Healthcare Informatics
            </Heading>
            ,{" "}
            <Heading inline as="span" size="3" mono>
              Clinical Engineering
            </Heading>
            , and{" "}
            <Heading inline as="span" size="3" mono>
              Data Science
            </Heading>
            .
          </Heading>
        </Section>
      </Box>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const papers = (await getAllPublications()).slice(0, 3);
  const posts = (await getAllPosts()).filter((post) => post.meta.featured);
  return {
    props: {
      recentPublications: papers,
      recentPosts: posts,
    },
  };
};
