import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import { initGA, logPageView } from '../utils/analytics'
import { Contacts } from '../components/contacts.component'

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    initGA()
    logPageView()

    Router.router.events.on('routeChangeComplete', logPageView)
  }

  render() {
    const {
      Component,
      pageProps,
      router: { route },
    } = this.props

    return (
      <Container>
        <Global
          styles={css`
            .fade-enter {
              transform: translateY(-100vh);
              transition: transform 1000ms ease-in-out;
            }
            .fade-enter.fade-enter-active {
              transform: translateY(0vh);
              /* transition: transform 1000ms ease-in-out; */
            }
            .fade-exit {
              transform: translateY(0vh);
              /*transition: 0.3s transform ease-in-out;*/
            }
            .fade-exit.fade-exit-active {
              transform: translateY(-100vh);
              transition: transform 1000ms ease-in-out;
            }

            .revfade-enter {
              transform: translateY(100vh);
              transition: transform 1000ms ease-in-out;
            }
            .revfade-enter.revfade-enter-active {
              transform: translateY(0vh);
              /* transition: transform 1000ms ease-in-out; */
            }
            .revfade-exit {
              transform: translateY(0vh);
              /*transition: 0.3s transform ease-in-out;*/
            }
            .revfade-exit.revfade-exit-active {
              transform: translateY(100vh);
              transition: transform 1000ms ease-in-out;
            }
          `}
        />
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
          <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />
        </Head>

        <TransitionGroup>
          <CSSTransition classNames={route === '/' ? 'fade' : 'revfade'} timeout={1000} key={route}>
            <Wrapper>
              <Component {...pageProps} />
            </Wrapper>
          </CSSTransition>
        </TransitionGroup>
        <Contacts />
      </Container>
    )
  }
}
