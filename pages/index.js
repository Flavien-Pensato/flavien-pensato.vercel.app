import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Title } from '../components/title.component';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 700px) {
    align-items: flex-end;
  }
`;

const Background = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

const App = () => (
  <Wrapper>
    <Link href="/about">
      <a style={{ zIndex: 10 }}>
        <Title />
      </a>
    </Link>
    <Background async src="/static/assets/background.png" alt="Game background" />
  </Wrapper>
);

export default App;
