import React from "react";
import PropTypes from "prop-types";
import Meta from "../components/Meta";
// import Menu from "../components/Menu";
import Footer from "../components/Footer";

const Layout = ({ meta, children }) => (
  <>
    <Meta {...meta} />
    {/* <Menu /> */}
    <main>{children}</main>
    <Footer />
  </>
);

Layout.propTypes = {
  meta: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
