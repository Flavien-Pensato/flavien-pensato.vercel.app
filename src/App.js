import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Footer from './modules/components/footer/footer.component';
import Menu from './modules/components/menu/menu.component';

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
            <Menu />
          </div>

          <Route
            exact
            path="/"
            render={() => (
              <div className="app__content">
                Content
              </div>
              )}
          />
          <Route />
          <Route
            exact
            path="/projects"
            render={() => (
              <div className="app__content">
                Projects
              </div>
              )}
          />
          <Route />

          <div className="app__footer"><Footer /></div>
        </div>
      </Router>
    );
  }
}

export default App;
