import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Router from "next/router";

import { initGA, logPageView } from "../utils/analytics";

import "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    initGA();
    logPageView();

    Router.router.events.on("routeChangeComplete", logPageView);
  }, []);

  return <Component {...pageProps} />;
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  pageProps: PropTypes.shape().isRequired,
};

export default MyApp;
