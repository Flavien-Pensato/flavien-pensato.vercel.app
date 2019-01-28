import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

import Engine from '../modules/game/Engine';

import { Title } from '../components/title.component';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #5B94FC;
  width: 100vw;
  height: 100vh;

  @media (max-width: 700px) {
    align-items: flex-end;
  }
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`;

class App extends Component {
  componentDidMount() {
    const engine = new Engine('canvas', 'background');

    engine.init();
    engine.initDecors();
  }

  render() {
    return (
      <Wrapper>
        <Head>
          <title>Flavien Pensato</title>
          <meta name="title" content="Homepage Flavien Pensato" />
          <meta name="description" content="Hey, I'm Flavien Pensato. I'm a 24 years old boys working as a Frontend developer. Always bet on Javascript" />
          <meta property="og:title" content="Homepage Flavien Pensato" />
          <meta property="og:description" content="Hey, I'm Flavien Pensato. I'm a 24 years old boys working as a Frontend developer. Always bet on Javascript" />
          <meta property="og:url" content="https://flavien-pensato.github.io/" />
        </Head>
        <Canvas id="canvas" />
        <Canvas id="background" />
        <Link href="/about">
          <a style={{ zIndex: 10 }}>
            <Title />
          </a>
        </Link>
      </Wrapper>
    );
  }
}

export default App;
