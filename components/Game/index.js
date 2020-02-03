import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Engine from '../../modules/game/Engine';

export const Game = ({ children }) => {
  useEffect(() => {
    Engine.create();

    setTimeout(() => {
      Engine.create().stop();
    }, 2000);
  }, []);

  return children;
};

Game.propTypes = {
  children: PropTypes.node.isRequired,
};
