import React from 'react';
import styled from 'styled-components';

import { logEvent } from '../utils/analytics';

const Footer = styled.footer`
  display: flex;
  padding-top: 20px;
  padding-right: 20px;

  @media (max-width: 700px) {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  text-align: right;

  & > a {
    margin-left: 10px;
  }
`;

const handleClick = (category, action, label) => () => {
  logEvent(category, action, label);
};

export const Contacts = () => (
  <Footer>
    <a title="Github link" href="https://github.com/Flavien-Pensato" onClick={handleClick('Social', 'Clicked Github', 'Contacts')}>
      <i className="nes-icon github is-medium" />
    </a>
    <a title="Linkedin link" href="https://www.linkedin.com/in/flavien-pensato-708190a7" onClick={handleClick('Social', 'Clicked Linkedin', 'Contacts')}>
      <i className="nes-icon linkedin is-medium" />
    </a>
  </Footer>
);
