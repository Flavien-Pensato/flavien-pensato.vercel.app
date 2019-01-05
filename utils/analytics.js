import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('UA-46017345-2');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '', label = 'Others') => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};
