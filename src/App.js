import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://unpkg.com/nes.css@0.0.2/css/nes.min.css');
`;
const App = () => <div className="btn">Button</div>;

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root'),
);
