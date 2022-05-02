import { useEffect } from "react";
import { useRouter } from "next/router";

import { initGA, logPageView } from "../utils/analytics";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    initGA();

    if (!router.asPath.includes("?")) {
      logPageView();
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", logPageView);

    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
};

export default MyApp;
