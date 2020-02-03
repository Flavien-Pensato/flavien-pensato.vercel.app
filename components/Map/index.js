import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Engine from '../../modules/game/Engine';

const Canvas = styled.canvas`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`;

export const Map = ({ id, config, children }) => {
  const refCanvas = useRef();

  useEffect(() => {
    Engine.create().loadWorld(refCanvas.current, config);
  }, []);

  return (
    <Canvas ref={refCanvas}>
      {children}
    </Canvas>
  );
};

Map.defaultProps = {
  children: null,
};

Map.propTypes = {
  id: PropTypes.string.isRequired,
  config: PropTypes.array.isRequired,
  children: PropTypes.node,
};
