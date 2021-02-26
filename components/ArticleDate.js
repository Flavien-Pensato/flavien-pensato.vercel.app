import React from "react";
import PropTypes from "prop-types";

import styles from "./ArticleDate.module.css";

const ArticleDate = ({ from, to }) => {
  let time = null;

  if (!to) {
    time = (
      <>
        Depuis&nbsp;
        <time dateTime={from}>{new Date(from).getFullYear()}</time>
      </>
    );
  } else {
    time = (
      <>
        De&nbsp;<time dateTime={from}>{new Date(from).getFullYear()}</time>
        &nbsp;à&nbsp;<time dateTime={to}>{new Date(to).getFullYear()}</time>
      </>
    );
  }

  return <div className={styles.articleDate}>{time}</div>;
};

ArticleDate.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default ArticleDate;
