import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Engine from '../../modules/game/Engine';
import { mario } from '../../modules/game/decors';

const Canvas = styled.canvas`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`;

export const Character = ({ id }) => {
  const refCanvas = useRef();

  useEffect(() => {
    Engine.create().addCharacter(refCanvas.current,
      {
        ...mario,
        name: id,
        sprite: '/static/game/mariosheet.png',
      });
  }, []);

  return <Canvas ref={refCanvas} />;
};

Character.propTypes = {
  id: PropTypes.string.isRequired,
};
