import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
} from 'react-router-dom';

import Footer from './modules/components/footer/footer.component';

import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('hello');
  }

  render() {
    return (
      <Router>
        <div className="app">
          <div className="app__menu">
            <nav className="menu">
              <ul>
                <li><NavLink to="/" className="menu__link" activeClassName="menu__link--selected">Home</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className="app__content">
            Content
          </div>
          <div className="app__footer"><Footer /></div>
        </div>
      </Router>
    );
  }
}

export default App;
