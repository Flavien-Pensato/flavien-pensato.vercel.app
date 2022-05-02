import ReactGA from "react-ga";

export const initGA = () => {
  if (process.env.NEXT_PUBLIC_REACT_GA) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_REACT_GA);
  }
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = "", action = "") => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
