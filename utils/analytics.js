import ReactGA from "react-ga";

export const initGA = () =>
  process.env.NEXT_PUBLIC_REACT_GA &&
  ReactGA.initialize(process.env.NEXT_PUBLIC_REACT_GA);

export const logPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
