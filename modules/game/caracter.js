import { keys } from './controls';
// import { map } from './decors';

export const directions = {
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left',
};

export const defaultCaracter = (positionX = 32, positionY = 60) => ({
  X: positionX,
  Y: positionY,
  gravity: {
    value: 0,
    speed: 0.02,
    max: 0.35,
  },
  motion: {
    value: 0,
    speed: 0.008,
    max: 0.3,
  },
  direction: directions.right,
});

// const checkCollisionUpDown = (nextPosition, currentPosition) => position;

export const update = (caracter, controls, canvasHeight, delta) => {
  if (controls[keys.up] && caracter.onGround) {
    caracter.gravity.value = -caracter.gravity.max - 0.2;

    caracter.Y += caracter.gravity.value * delta;

    caracter.onGround = false;
  }

  // caracter.Y checkCollisionUpDown(caracter.gravity.value * delta, ;

  if (controls[keys.right] || controls[keys.left]) {
    caracter.motion.value += caracter.motion.speed;

    if (caracter.motion.value >= caracter.motion.max) {
      caracter.motion.value = caracter.motion.max;
    }

    if (controls[keys.left]) {
      caracter.direction = directions.left;
      caracter.X -= caracter.motion.value * delta;
    } else {
      caracter.direction = directions.right;
      caracter.X += caracter.motion.value * delta;
    }
  } else {
    caracter.motion.value = 0;
  }

  // if (controls[keys.down]) {}

  caracter.gravity.value += caracter.gravity.speed;

  if (caracter.gravity.value >= caracter.gravity.max) {
    caracter.gravity.value = caracter.gravity.max;
  }

  return caracter;
};
