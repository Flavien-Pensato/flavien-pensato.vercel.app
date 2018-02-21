import React from 'react';
import { NavLink } from 'react-router-dom';

import github from './github.svg';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';

import './footer.scss';


class Footer extends React.Component {
  constructor(props) {
    super(props);

    console.log('hello');
  }
  render() {
    return (
      <footer>
        <h1 className="footer__title">Get in touch</h1>
        <ul className="footer__list-logos">
          <li>
            <a href="https://github.com/Flavien-Pensato">
              <span className="footer__social-network-logo">
                <img alt="Github" src={github} />
              </span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Flavien_Pensato">
              <span className="footer__social-network-logo">
                <img alt="Twitter" src={twitter} />
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/flavien-pensato-708190a7/">
              <span className="footer__social-network-logo">
                <img alt="Linkedin"src={linkedin} />
              </span>
            </a>
          </li>
        </ul>
      </footer>

    );
  }
}

export default Footer;
