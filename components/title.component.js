import React, { Fragment } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`

`;

const P = styled.p`

`;

const Header = styled.header`
  min-width: 320px;
  padding: 20px;

  @media (max-width: 700px) {
    padding-left: 20px;
    padding-right: 10px;
  }

  text-align: left;
  text-shadow: 2px 2px 5px white;
`;

export const Title = () => (
  <Header>
    <H1>
      <i className="snes-jp-logo brand" />
      Hello, I'm Flavien&nbsp;!
      <br />
    </H1>
    <P>
      An enthusiastic Frontend developper
    </P>
  </Header>
);
