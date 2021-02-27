import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import { slugBlogs, getMetaBlogFromSlug } from "../../utils/blog";
import Layout from "../../layouts";

const Blog = ({ blogs }) => (
  <Layout
    meta={{
      title: "Flavien Pensato - Blog",
      description: "Javascript, css, svg et bien d'autres sujets sont abordés",
    }}
  >
    <section>
      <h1>Blog</h1>
      <nav>
        <ul>
          {blogs.map(({ slug, title }) => (
            <ol key={slug}>
              <Link href={"/blog/".concat(slug)}>
                <a>{title}</a>
              </Link>
            </ol>
          ))}
        </ul>
      </nav>
    </section>
  </Layout>
);

Blog.propTypes = {
  blogs: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export const getStaticProps = () => {
  const blogs = slugBlogs.map(getMetaBlogFromSlug);

  return {
    props: {
      blogs,
    },
  };
};

export default Blog;
