import fs from "fs";
import path from "path";
import React from "react";
import PropTypes from "prop-types";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

// import Image from "next/image";
import Layout from "../../layouts";
import { blogPath, slugBlogs } from "../../utils/blog";
// import { Heading, Text, Pre, Code, Table } from '../components'

const components = {};

const Blog = ({ source, meta }) => {
  const content = hydrate(source, { components });

  return (
    <Layout meta={meta}>
      <section> {content}</section>
    </Layout>
  );
};

Blog.propTypes = {
  source: PropTypes.shape().isRequired,
  meta: PropTypes.shape().isRequired,
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
