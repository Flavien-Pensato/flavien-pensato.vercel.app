import debugFactory from 'debug';

export const debug = debugFactory('engine');

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
        ...element,
        Sprite,
      };

      return newElement;
    }
    debug('No Element added. Missing \'Decor\'.');
  } catch (error) {
    debug('No Element added. Missing `Sprite`.');
  }

  return null;
};
