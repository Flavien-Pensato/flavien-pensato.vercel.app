import React from 'react';
import styled from 'styled-components';


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

export const Contacts = () => (
  <Footer>
    <a title="Github link" href="https://github.com/Flavien-Pensato">
      <i className="nes-icon github is-medium" />
    </a>
    <a title="Linkedin link" href="https://www.linkedin.com/in/flavien-pensato-708190a7">
      <i className="nes-icon linkedin is-medium" />
    </a>
  </Footer>
);
