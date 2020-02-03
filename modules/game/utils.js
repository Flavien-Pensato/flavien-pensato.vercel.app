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

    Sprite.onerror = (error) => reject(error);

    Sprite.src = spriteSource;
  });
};

export const clear = (elements) => {
  elements.forEach((element) => {
    element.canvas.clearRect(element.X, element.Y, element.width, element.height);
  });
};

export const draw = (elements) => {
  elements.forEach((element) => {
    element.canvas.drawImage(element.sprite, element.Sx, element.Sy, element.Swidth,
      element.Sheight, element.X, element.Y, element.width, element.height);
  });
};
