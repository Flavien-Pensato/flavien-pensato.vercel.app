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
    const setTimeoutID = setTimeout(() => reject(Error('Timeout exceed 2sec')), 2000);

    Sprite.onload = () => {
      clearTimeout(setTimeoutID);

      resolve(Sprite);
    };

    Sprite.src = spriteSource;
  });
};

export const addElement = async (canvasId, element, spriteSource) => {
  const Canvas = getCanvas(canvasId);

  try {
    const Sprite = await loadSprite(spriteSource);

    if (Canvas && element) {
      Canvas.width = window.innerWidth;
      Canvas.height = window.innerHeight;

      const newElement = {
        ...element,
        Canvas,
        Context2D: Canvas.getContext('2d'),
        Sprite,
      };

      return newElement;
    }
    debug(`No Element added. Missing '${Canvas ? 'Decor' : 'Canvas'}'.`);
  } catch (error) {
    debug('No Element added. Missing `Sprite`.');
  }

  return null;
};
