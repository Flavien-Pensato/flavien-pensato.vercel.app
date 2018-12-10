import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';

module.exports = function render() {
  const content = renderToString(
    <App />,
  );

  return { content };
};
