import React from "react";
import PropTypes from "prop-types";

const Article = ({ header, children }) => (
  <article className="py-2">
    {header}
    {children}
  </article>
);

Article.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Article;
