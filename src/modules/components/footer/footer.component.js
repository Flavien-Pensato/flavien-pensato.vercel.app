import React from 'react';

import github from './github.svg';
import twitter from './twitter.svg';
import linkedin from './linkedin.svg';

import './footer.scss';


class Footer extends React.Component {

  hoverHandler = (event) => {
    const { target } = event;
    if (target.tagName === "SPAN") {
      console.log('in');
      target.classList.remove('.footer__social-network-logo--blur');
      window.requestAnimationFrame(() => {
        target.classList.add('.footer__social-network-logo--hover');
      });
    }
  };
  
  blurHandler = (event) => {
    const { target } = event;
    
    if (target.tagName === "SPAN") {
      console.log('out');
      target.classList.remove('.footer__social-network-logo--hover');
      window.requestAnimationFrame(() => {
        target.classList.add('.footer__social-network-logo--blur');
      });
    }
  };
  
  render() {
    return (
      <footer>
      <h1 className="footer__title">Get in touch</h1>
      <ul className="footer__list-logos">
        <li>
          <span className="footer__social-network-logo" ref='logo' onMouseOver={this.hoverHandler} onMouseLeave={this.blurHandler}>
            <img src={github}/>
          </span>
        </li>   
        <li>
          <span className="footer__social-network-logo" ref='logo' onMouseOver={this.hoverHandler} onMouseLeave={this.blurHandler}>
            <img src={twitter}/>
          </span>
        </li>
        <li>
          <span className="footer__social-network-logo" ref='logo' onMouseOver={this.hoverHandler} onMouseLeave={this.blurHandler}>
             <img src={twitter}/>
          </span>
        </li>
      </ul>
    </footer>
  
    )
  }
}

export default Footer;
