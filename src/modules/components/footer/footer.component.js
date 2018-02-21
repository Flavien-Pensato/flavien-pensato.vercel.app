import React from 'react';

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
            <span className="footer__social-network-logo">
              <img alt="Github" src={github} />
            </span>
          </li>
          <li>
            <span className="footer__social-network-logo">
              <img alt="Twitter" src={twitter} />
            </span>
          </li>
          <li>
            <span className="footer__social-network-logo">
              <img alt="Linkedin"src={linkedin} />
            </span>
          </li>
        </ul>
      </footer>

    );
  }
}

export default Footer;
