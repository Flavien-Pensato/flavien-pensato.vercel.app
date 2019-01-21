import { keys } from './controls';

export const directions = {
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left',
};

export const defaultCaracter = (positionX = 32, positionY = 0) => ({
  X: positionX,
  Y: positionY,
  gravity: {
    value: 0,
    speed: 0.01,
    max: 0.08,
  },
  motion: {
    value: 0,
    speed: 0.006,
    max: 0.08,
  },
  direction: directions.right,
});

export const update = (caracter, controls, canvasHeight, delta) => {
  if (controls[keys.up]) {
    caracter.gravity.value = -caracter.gravity.max;
    caracter.Y += caracter.gravity.value * delta;
  }

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

  caracter.Y += caracter.gravity.value * delta;

  const rockbottom = canvasHeight;

  if (caracter.Y > rockbottom) {
    caracter.Y = rockbottom;
    caracter.gravity.value = 0;
  }

  return caracter;
};
