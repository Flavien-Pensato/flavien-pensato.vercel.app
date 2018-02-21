import React from 'react';
import { NavLink } from 'react-router-dom';

import './menu.scss';

const Menu = () => (
  <div className="menu">
    <nav>
      <div className="menu__list">
        <NavLink to="/" exact className="menu__link" activeClassName="menu__link--selected">
          <div>Home</div>
        </NavLink>
        <NavLink to="/projects" exact className="menu__link" activeClassName="menu__link--selected">
          <div>Projects</div>
        </NavLink>
      </div>
    </nav>
  </div>
);

export default Menu;
