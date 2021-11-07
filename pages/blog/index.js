import React from "react";
import Link from "next/link";
import { DateTime } from "luxon";

import { slugBlogs, getMetaBlogFromSlug } from "../../utils/blog";
import ChronologyDate from "../../atoms/ChronologyDate";
import Meta from "../../organims/Meta";
import Menu from "../../molecules/Menu";
import Footer from "../../molecules/Footer";

const Blog = ({ blogs }) => (
  <>
    <Meta
      title="Flavien Pensato - Blog"
      description="Javascript, css, svg et bien d'autres sujets sont abordés"
      author="Flavien Pensato"
      keywords="CSS, SVG"
      viewport="initial-scale=1.0, width=device-width"
    />
    <Menu />
    <main>
      <section>
        <h1>Blog</h1>
        <nav>
          <ul>
            {blogs.map(({ slug, title, createAt }) => (
              <ol key={slug}>
                <Link href={"/blog/".concat(slug)}>
                  <a>{title}</a>
                </Link>
                <ChronologyDate startAt={createAt} fixed />
              </ol>
            ))}
          </ul>
        </nav>
      </section>
    </main>
    <Footer />
  </>
);

export const getStaticProps = () => {
  const blogs = slugBlogs.map(getMetaBlogFromSlug);

  return {
    props: {
      blogs,
    },
  };
};

export default Blog;
