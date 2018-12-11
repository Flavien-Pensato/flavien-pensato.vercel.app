import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import background from '../public/assets/background.png';

import { Title } from './modules/components/title.component';
import { Contact } from './modules/components/contacts.component';

const GlobalStyle = createGlobalStyle`
  @import url('https://unpkg.com/nes.css@0.0.2/css/nes.min.css');
`;

const Wrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: left;

  display: flex;
  justify-content: space-between;
  
  @media (max-width: 700px) {
    justify-content: center;
    align-items: center;
  }

  height: 100vh;
  width: 100vw;
`;


const App = () => (
  <Wrapper>
    <Title />
    <Contact />
  </Wrapper>
);

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <App />
  </Fragment>,
  document.getElementById('root'),
);
