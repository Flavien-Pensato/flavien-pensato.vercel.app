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
    caseType = findCase(height - nextPositionY - caracter.height, caracter.X + caracter.collisionLeft);

    if (!caseType) {
      caseType = findCase(height - nextPositionY - caracter.height, caracter.X
        + caracter.width + caracter.collisionRight);
    }

    if (caracter.collisionCaseTypes.indexOf(caseType) >= 0) {
      caracter.onGround = true;
    }
  } else {
    caseType = findCase(height - nextPositionY, caracter.X + caracter.collisionLeft);

    if (!caseType) {
      caseType = findCase(height - nextPositionY, caracter.X + caracter.width + caracter.collisionRight);
    }
  }

  if (caracter.collisionCaseTypes.indexOf(caseType) >= 0) {
    caracter.gravity.value = 0;

    return caracter.Y;
  }

  return nextPositionY;
};
