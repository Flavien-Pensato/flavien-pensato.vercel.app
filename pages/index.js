import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

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
    <Head>
      <title>Flavien Pensato</title>
      <meta name="Description" content="Hey, I'm Flavien Pensato. I'm a 24 years old boys working as a Frontend developer. Always bet on Javascript" />
      <meta property="og:image" content="/static/favicons/og-image.jpg" />
      <meta property="og:image:height" content="209" />
      <meta property="og:image:width" content="400" />
      <meta property="og:title" content="Homepage Flavien Pensato" />
      <meta property="og:description" content="Hey, I'm Flavien Pensato. I'm a 24 years old boys working as a Frontend developer. Always bet on Javascript" />
      <meta property="og:url" content="https://flavien-pensato.github.io/" />
    </Head>
    <Link href="/about">
      <a style={{ zIndex: 10 }}>
        <Title />
      </a>
    </Link>
    <Background async src="/static/assets/background.png" alt="Game background" />
  </Wrapper>
);

export default App;
