import { keys } from './controls';
import { map } from './decors';

export const directions = {
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left',
};

export const defaultCaracter = (positionX = 32, positionY = 60) => ({
  X: positionX,
  Y: positionY,
  height: 54,
  width: 28,
  collisionLeft: 5,
  collisionRight: -10,
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
  collisionCaseTypes: ['brick', 'ground', 'question', 'pipe'],
  direction: directions.right,
});

const findCase = (Y, X) => {
  const caseY = Math.floor(Y / 30);
  const caseX = Math.floor(X / 30);

  if (map[caseY]) {
    return map[caseY][caseX];
  }

  return null;
};

const checkCollisionUpDown = (caracter, decors, delta) => {
  const nextPositionY = caracter.Y + caracter.gravity.value * delta;
  let caseType = null;

  if (caracter.gravity.value > 0) {
    caseType = findCase(decors.Canvas.height - nextPositionY - caracter.height, caracter.X + caracter.collisionLeft);

    if (!caseType) {
      caseType = findCase(decors.Canvas.height - nextPositionY - caracter.height, caracter.X
        + caracter.width + caracter.collisionRight);
    }

    if (caracter.collisionCaseTypes.indexOf(caseType) >= 0) {
      caracter.onGround = true;
    }
  } else {
    caseType = findCase(decors.Canvas.height - nextPositionY, caracter.X + caracter.collisionLeft);

    if (!caseType) {
      caseType = findCase(decors.Canvas.height - nextPositionY, caracter.X + caracter.width + caracter.collisionRight);
    }
  }

  if (caracter.collisionCaseTypes.indexOf(caseType) >= 0) {
    caracter.gravity.value = 0;

    return caracter.Y;
  }

  return nextPositionY;
};

export const update = (caracter, controls, decors, delta) => {
  if (controls[keys.up] && caracter.onGround) {
    caracter.gravity.value = -caracter.gravity.max - 0.2;
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

  caracter.Y = checkCollisionUpDown(caracter, decors, delta);

  return caracter;
};
