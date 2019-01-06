import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { OutboundLink } from 'react-ga';

const Wrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 100px;
  right: 10px;
  bottom: 10px;
  z-index: -1;
`;

const Container = styled.p`
  overflow-y: auto;
  height: calc(100vh - 150px - 2rem);
  font-size: 10px;
`;

const About = () => (
  <Wrapper>
    <div className="nes-container with-title">
      <h2 className="title">
        <Link href="/">
          <a>Actual job</a>
        </Link>
      </h2>
      <Container>
        I'm currently at
        <OutboundLink title="Peaks" to="https://peaks.fr" target="_blank" eventLabel="Peaks">&nbsp;Peaks&nbsp;</OutboundLink>
        as consultant.
        <br />
        <br />
        I'm working as consultant for M6 Web as a NaN team member.
      NaN is the team in charge of the front-end of
        <OutboundLink title="6play" to="https://6play.fr" target="_blank" eventLabel="6play">&nbsp;6play&nbsp;</OutboundLink>
      (with the exception of the video player).
        <br />
        <br />
      We ensures the development of new features and its maintenance. The team was originally created to transform
        <OutboundLink title="6play" to="https://6play.fr" target="_blank" eventLabel="6play">&nbsp;6play </OutboundLink>
      into a white label product in order to market it internationally.
        <br />
        <br />
      Now the team is in charge, in addition to
        <OutboundLink title="6play France" to="https://6play.fr" target="_blank" eventLabel="6play France">&nbsp;6play France</OutboundLink>
,
        <OutboundLink title="RTL Most Hungary" to="http://rtlmost.hu" target="_blank" eventLabel="RTL Most Hungary">&nbsp;RTL Most Hungary</OutboundLink>
,
        <OutboundLink title="RTL Play Croatia" to="https://play.rtl.hr/" target="_blank" eventLabel="RTL Play Croatia">&nbsp;RTL Play Croatia</OutboundLink>
,
        <OutboundLink title="RTL Play Belgium" to="http://rtlplay.be" target="_blank" eventLabel="RTL Play Belgium">&nbsp;RTL Play Belgium</OutboundLink>
.
      </Container>
    </div>
  </Wrapper>
);

export default About;
