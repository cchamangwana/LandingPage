"use client";

import NextHead from "next/head";
import { Container } from "@chakra-ui/react";
import Blogs from "@/components/sections/Blogs";
import blogs from "../utils/blogs";

interface Posts {
  _id: number;
  title: string;
  content: string;
  image: string;
  created: string;
}

const BlogPage = () => {
  return (
    <>
      <NextHead>
        <title>Blogs</title>
      </NextHead>

      <Container maxW={"6xl"} py={30}>
        <Blogs blogs={blogs} />
      </Container>
    </>
  );
};

export default BlogPage;
