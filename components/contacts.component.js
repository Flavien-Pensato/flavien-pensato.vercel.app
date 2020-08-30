import React from 'react'
import { OutboundLink } from 'react-ga'
import styled from '@emotion/styled'

const Footer = styled.footer`
  position: absolute;
  top: 20px;
  right: 20px;

  text-align: right;

  & > a {
    margin-left: 10px;
  }
`

export const Contacts = () => (
  <Footer>
    <OutboundLink title="Github link" to="https://github.com/Flavien-Pensato" target="_blank" eventLabel="Github">
      <i className="nes-icon github is-medium" />
    </OutboundLink>
    <OutboundLink
      title="Linkedin link"
      to="https://www.linkedin.com/in/flavien-pensato-708190a7"
      target="_blank"
      eventLabel="Linkedin"
    >
      <i className="nes-icon linkedin is-medium" />
    </OutboundLink>
  </Footer>
)
