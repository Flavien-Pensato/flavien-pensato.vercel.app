import debugFactory from 'debug';

export const debug = debugFactory('engine');

const defaultCharacter = {
  X: 32,
  Y: 60,
  height: 54,
  width: 28,
  Sx: 10,
  Sy: 5,
  Swidth: 14,
  Sheight: 27,
  collisionLeft: 5,
  collisionRight: -10,
  onGround: true,
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
  direction: 'right',
};

export const getCanvas = (canvasId) => {
  const canvas = document.getElementById(canvasId);

  if (!canvas) {
    debug(`'${canvasId}' canvas not found.`);
  }

  return canvas;
};

export const loadSprite = (spriteSource) => {
  const Sprite = new Image();

  return new Promise((resolve, reject) => {
    Sprite.onload = () => resolve(Sprite);

    Sprite.onerror = error => reject(error);

    Sprite.src = spriteSource;
  });
};

export const addElement = async (element, spriteSource) => {
  try {
    const Sprite = await loadSprite(spriteSource);

    if (element) {
      const newElement = {
        ...defaultCharacter,
        ...element,
        Sprite,
      };

      return newElement;
    }
    debug('No Element added. Missing `Element`.');
  } catch (error) {
    debug('No Element added. Missing `Sprite`.');
  }

  return null;
};
