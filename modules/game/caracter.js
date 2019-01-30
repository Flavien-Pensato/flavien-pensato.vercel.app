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

export const update = (caracter, controls, canvasHeight, delta) => {
  if (controls[keys.up] && caracter.onGround) {
    caracter.gravity.value = -caracter.gravity.max - 0.2;
    caracter.Y += caracter.gravity.value * delta;
    caracter.onGround = false;
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
    caracter.onGround = true;
  }

  return caracter;
};
