import React, { useEffect } from "react";
import Router from "next/router";

import "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
