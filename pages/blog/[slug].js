import fs from "fs";
import path from "path";
import React from "react";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

import Meta from "../../organims/Meta";

import Image from "next/image";
import CodeBlock from "../../atoms/CodeBlock";

import { blogPath, slugBlogs } from "../../utils/blog";
import { BlogTemplate } from "../../templates/blog";

const components = {
  img: Image,
  code: CodeBlock,
};

const Blog = ({ source, meta }) => {
  const content = hydrate(source, { components });

  return <BlogTemplate meta={meta} content={content} />;
};

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(blogPath, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, { components, scope: data });

  return {
    props: {
      source: mdxSource,
      meta: data,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: slugBlogs.map((slugBlog) => ({
      params: {
        slug: slugBlog,
      },
    })),
    fallback: false,
  };
};

export default Blog;
