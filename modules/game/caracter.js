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
  gravity: 0.4,
  gravitySpeed: 0,
  gravityMax: 3,
  motion: 0.2,
  motionSpeed: 0,
  motionMax: 3,
  direction: directions.right,
});

export const update = (caracter, controls, canvasHeight) => {
  if (controls[keys.up]) {
    caracter.gravitySpeed = -caracter.gravityMax;
    caracter.Y += caracter.gravitySpeed;
  }

  if (controls[keys.right] || controls[keys.left]) {
    caracter.motionSpeed += caracter.motion;

    if (caracter.motionSpeed >= caracter.motionMax) {
      caracter.motionSpeed = caracter.motionMax;
    }

    if (controls[keys.left]) {
      caracter.direction = directions.left;
      caracter.X -= caracter.motionSpeed;
    } else {
      caracter.direction = directions.right;
      caracter.X += caracter.motionSpeed;
    }
  } else {
    caracter.motionSpeed = 0;
  }

  // if (controls[keys.down]) {}

  caracter.gravitySpeed += caracter.gravity;

  if (caracter.gravitySpeed >= caracter.gravityMax) {
    caracter.gravitySpeed = caracter.gravityMax;
  }

  caracter.Y += caracter.gravitySpeed;

  const rockbottom = canvasHeight - 32;

  if (caracter.Y > rockbottom) {
    caracter.Y = rockbottom;
    caracter.gravitySpeed = 0;
  }

  return caracter;
};
