import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  @media (max-width: 700px) {
    font-size: 20px
  }
`;

const P = styled.p`
  @media (max-width: 700px) {
    font-size: 12px
  }
`;

const I = styled.i`
  margin-right: 1rem;
`;

const Header = styled.header`
  min-width: 320px;
  padding: 20px;
  color: black;

  text-align: left;
  text-shadow: 2px 2px 5px white;

  @media (max-width: 700px) {
    padding-bottom: 100px;
  }
`;

export const Title = () => (
  <Header>
    <H1>
      <I className="snes-jp-logo brand" />
      Hello,
      <br />
I'm Flavien!
      <br />
    </H1>
    <P>
      An enthusiastic Frontend developper
    </P>
  </Header>
);
