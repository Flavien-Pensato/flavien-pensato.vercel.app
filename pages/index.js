import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

import Engine from '../modules/game/Engine';
import { map } from '../modules/game/decors';

import { Title } from '../components/title.component';
import { Game } from '../components/Game';
import { Map } from '../components/Map';
import { Character } from '../components/Character';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;

  align-items: flex-start;
`;

const Mario = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;

  canvas {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .player {
    z-index: 2;
  }
`;

class App extends Component {
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
        <Game>
          <Map id="level-1" config={map}>
          </Map>
            <Character id="mario"/>
        </Game>
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
