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
  gravity: 0.01,
  gravitySpeed: 0,
  gravityMax: 0.08,
  motion: 0.006,
  motionSpeed: 0,
  motionMax: 0.08,
  direction: directions.right,
});

export const update = (caracter, controls, canvasHeight, delta) => {
  if (controls[keys.up]) {
    caracter.gravitySpeed = -caracter.gravityMax;
    caracter.Y += caracter.gravitySpeed * delta;
  }

  if (controls[keys.right] || controls[keys.left]) {
    caracter.motionSpeed += caracter.motion;

    if (caracter.motionSpeed >= caracter.motionMax) {
      caracter.motionSpeed = caracter.motionMax;
    }

    if (controls[keys.left]) {
      caracter.direction = directions.left;
      caracter.X -= caracter.motionSpeed * delta;
    } else {
      caracter.direction = directions.right;
      caracter.X += caracter.motionSpeed * delta;
    }
  } else {
    caracter.motionSpeed = 0;
  }

  // if (controls[keys.down]) {}

  caracter.gravitySpeed += caracter.gravity;

  if (caracter.gravitySpeed >= caracter.gravityMax) {
    caracter.gravitySpeed = caracter.gravityMax;
  }

  caracter.Y += caracter.gravitySpeed * delta;

  const rockbottom = canvasHeight;

  if (caracter.Y > rockbottom) {
    caracter.Y = rockbottom;
    caracter.gravitySpeed = 0;
  }

  return caracter;
};
