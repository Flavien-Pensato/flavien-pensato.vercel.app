import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import { OutboundLink } from 'react-ga'
import Head from 'next/head'

const Wrapper = styled.div`
  display: flex;
  max-width: 40rem;

  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px;
`

const Container = styled.p`
  overflow-y: auto;
  font-size: 10px;
`

const About = () => (
  <Wrapper>
    <Head>
      <title>About Flavien Pensato</title>
      <meta name="title" content="About Flavien Pensato" />
      <meta
        name="description"
        content="Hey, I'm Flavien Pensato. I'm a 24 years old boys working as a Frontend developer. I work for M6 web as a Peaks consultant."
      />
      <meta property="og:title" content="About Flavien Pensato" />
      <meta
        property="og:description"
        content="Check my actual Job is you want to know more about Flavien Pensato. I work for M6 web as a Peaks consultant."
      />
      <meta property="og:url" content="https://flavien-pensato.github.io/about" />
    </Head>
    <div>
      <div className="nes-container with-title">
        <h2 className="title">
          <Link href="/">
            <a href="/">Actual job</a>
          </Link>
        </h2>
        <Container>
          I&apos;m currently at
          <OutboundLink title="Peaks" to="https://peaks.fr" target="_blank" eventLabel="Peaks">
            &nbsp;Peaks&nbsp;
          </OutboundLink>
          as consultant.
          <br />
          <br />
          I&apos;m working as consultant for M6 Web as a NaN team member. NaN is the team in charge of the front-end of
          <OutboundLink title="6play" to="https://6play.fr" target="_blank" eventLabel="6play">
            &nbsp;6play&nbsp;
          </OutboundLink>
          (with the exception of the video player).
          <br />
          <br />
          We ensures the development of new features and its maintenance. The team was originally created to transform
          <OutboundLink title="6play" to="https://6play.fr" target="_blank" eventLabel="6play">
            &nbsp;6play{' '}
          </OutboundLink>
          into a white label product in order to market it internationally.
          <br />
          <br />
          Now the team is in charge, in addition to
          <OutboundLink title="6play France" to="https://6play.fr" target="_blank" eventLabel="6play France">
            &nbsp;6play France
          </OutboundLink>
          ,
          <OutboundLink title="RTL Most Hungary" to="http://rtlmost.hu" target="_blank" eventLabel="RTL Most Hungary">
            &nbsp;RTL Most Hungary
          </OutboundLink>
          ,
          <OutboundLink
            title="RTL Play Croatia"
            to="https://play.rtl.hr/"
            target="_blank"
            eventLabel="RTL Play Croatia"
          >
            &nbsp;RTL Play Croatia
          </OutboundLink>
          ,
          <OutboundLink title="RTL Play Belgium" to="http://rtlplay.be" target="_blank" eventLabel="RTL Play Belgium">
            &nbsp;RTL Play Belgium
          </OutboundLink>
          .
        </Container>
      </div>
    </div>
  </Wrapper>
)

export default About
