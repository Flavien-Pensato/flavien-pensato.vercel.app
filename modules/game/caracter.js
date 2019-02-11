import { map } from './decors';

const findCase = (Y, X) => {
  const caseY = Math.floor(Y / 30);
  const caseX = Math.floor(X / 30);

  if (map[caseY]) {
    return map[caseY][caseX];
  }

  return null;
};

export const checkCollisionUpDown = (caracter, height, delta) => {
  const nextPositionY = caracter.Y + caracter.gravity.value * delta;
  let caseType = null;

  if (caracter.gravity.value > 0) {
    caseType = findCase(height - nextPositionY - caracter.canvas.height, caracter.X + caracter.collisionLeft);

    if (!caseType) {
      caseType = findCase(height - nextPositionY - caracter.canvas.height, caracter.X
        + caracter.canvas.width + caracter.collisionRight);
    }

    if (caracter.collisionCaseTypes.indexOf(caseType) >= 0) {
      caracter.onGround = true;
    }
  } else {
    caseType = findCase(height - nextPositionY, caracter.X + caracter.collisionLeft);

    if (!caseType) {
      caseType = findCase(height - nextPositionY, caracter.X + caracter.canvas.width + caracter.collisionRight);
    }
  }

  if (caracter.collisionCaseTypes.indexOf(caseType) >= 0) {
    caracter.gravity.value = 0;

    return caracter.Y;
  }

  return nextPositionY;
};

export const stop = {
  height: 54,
  width: 28,
  Sx: 10,
  Sy: 5,
  Swidth: 14,
  Sheight: 27,
};

export const running1 = {
  height: 54,
  width: 28,
  Sx: 40,
  Sy: 5,
  Swidth: 16,
  Sheight: 27,
};

export const running2 = {
  height: 54,
  width: 28,
  Sx: 72,
  Sy: 5,
  Swidth: 16,
  Sheight: 26,
};
