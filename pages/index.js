import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';


import { Title } from '../modules/components/title.component';
import { Contact } from '../modules/components/contacts.component';

const Wrapper = styled.div`
  background-image: url('/static/assets/background.png');
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

export default App;
