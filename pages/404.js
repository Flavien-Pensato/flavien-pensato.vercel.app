import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../layouts";

import { slugBlogs, getMetaBlogFromSlug } from "../utils/blog";

const NotFound = ({ blogs }) => {
  const router = useRouter();
  const search = router.asPath.split("/").pop();
  const matchLinks = blogs.filter(({ slug }) => slug.includes(search));

  return (
    <Layout>
      <section>
        <h1>Page introuvable</h1>

        {matchLinks.length > 0 && (
          <>
            <p>Lien(s) similaire(s) :</p>
            <nav>
              <ul>
                {matchLinks.map(({ slug, title }) => (
                  <ol key={slug}>
                    <Link href={"/blog/".concat(slug)}>
                      <a>{title}</a>
                    </Link>
                  </ol>
                ))}
              </ul>
            </nav>
          </>
        )}
      </section>
    </Layout>
  );
};

NotFound.propTypes = {
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

export default NotFound;
