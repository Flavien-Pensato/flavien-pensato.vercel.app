import React from 'react';
import PropTypes from 'prop-types';

import cloud from './cloud.svg';

import './cloud.scss';

const Clouds = ({ children }) => (
  <div className="clouds">
    <img className="cloud cloud-one" alt="true" src={cloud} />
    <img className="cloud cloud-two" alt="true" src={cloud} />
    <img className="cloud cloud-three" alt="true" src={cloud} />
    <img className="cloud cloud-four" alt="true" src={cloud} />
    {children}
  </div>
);

Clouds.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Clouds;
