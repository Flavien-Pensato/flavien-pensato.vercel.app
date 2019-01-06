import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { createGlobalStyle } from 'styled-components';

import { initGA, logPageView } from '../utils/analytics';
import { Contacts } from '../components/contacts.component';

const GlobalStyle = createGlobalStyle`
  .fade-enter {
    transform: translateY(100vh);
    /*transition: transform 1000ms ease-in-out;*/
  }
  .fade-enter.fade-enter-active {
    transform: translateY(0vh);
    transition: transform 1000ms ease-in-out;
  }
  .fade-exit {
    transform: translateY(0vh);
    /*transition: 0.3s transform ease-in-out;*/
  }
  .fade-exit.fade-exit-active {
    transform: translateY(-100vh);
    transition: transform 1000ms ease-in-out;
  }
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    initGA();
    logPageView();

    Router.router.events.on('routeChangeComplete', logPageView);
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <title>Flavien Pensato</title>
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
          <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
        </Head>

        <TransitionGroup>
          <CSSTransition
            classNames="fade"
            timeout={1000}
            key={router.route}
          >
            <Component {...pageProps} />
          </CSSTransition>
        </TransitionGroup>
        <Contacts />
      </Container>
    );
  }
}
