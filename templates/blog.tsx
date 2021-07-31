import React from "react";
import Footer from "../molecules/Footer";
import Menu from "../molecules/Menu";

import Meta from "../organims/Meta";

export const BlogTemplate = ({ meta, content }) => {
  return (
    <>
      <Meta {...meta} />
      <Menu />
      <section> {content}</section>
      <Footer />
    </>
  );
};
