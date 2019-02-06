import debugFactory from 'debug';

import { update } from './caracter';
import { defaultDecors } from './decors';
import { keydown, keyup, defaultControlsStatus } from './controls';

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


class Engine {
  constructor() {
    this.LastFrameTimeMs = 0;
    this.Timestep = 1000 / 60;
    this.Delta = 0;
    this.decors = [];
    this.characters = [];
    this.Controls = defaultControlsStatus;
  }

  start = () => {

  }

  stop = () => {

  }

  addDecors = async (canvasId, decor, spriteSource) => {
    const Canvas = getCanvas(canvasId);

    try {
      const Sprite = await loadSprite(spriteSource);

      if (Canvas && decor) {
        Canvas.width = window.innerWidth;
        Canvas.height = window.innerHeight;

        const newDecor = {
          ...decor,
          Canvas,
          Context2D: Canvas.getContext('2d'),
          Sprite,
        };
        this.decors.push(newDecor);
      }
      debug(`No Decor added. Missing element '${Canvas ? 'Decor' : 'Canvas'}'.`);
    } catch (error) {
      debug('No Decor added. Missing element `Sprite`.');
    }
  }

  addCharacter = async (canvasId, character, spriteSource) => {
    const Canvas = getCanvas(canvasId);

    try {
      const Sprite = await loadSprite(spriteSource);

      if (Canvas && character) {
        Canvas.width = window.innerWidth;
        Canvas.height = window.innerHeight;

        const newCharacter = {
          ...character,
          Canvas,
          Context2D: Canvas.getContext('2d'),
          Sprite,
        };

        this.characters.push(newCharacter);
      }

      debug(`No Character added. Missing element '${Canvas ? 'Character' : 'Canvas'}'.`);
    } catch (error) {
      debug('No Character added. Missing element `Sprite`.');
    }
  }

  loop = (timestamp) => {
    window.requestAnimationFrame(this.loop);

    this.Delta += timestamp - this.LastFrameTimeMs;
    this.LastFrameTimeMs = timestamp;

    while (this.Delta >= this.Timestep) {
      update(this.Mario, this.Controls, this.Decors, this.Timestep);
      this.Delta -= this.Timestep;
    }

    this.draw(this.Mario);
  }

  init = () => {
    this.Mario.mariosheet = new Image();

    return new Promise((resolve, reject) => {
      const setTimeoutID = setTimeout(() => reject(Error('Timeout exceed 2sec')), 2000);

      this.Mario.mariosheet.onload = () => {
        clearTimeout(setTimeoutID);
        this.Context2D.mozImageSmoothingEnabled = true;
        this.Context2D.webkitImageSmoothingEnabled = true;
        this.Context2D.msImageSmoothingEnabled = true;
        this.Context2D.imageSmoothingEnabled = true;
        this.Canvas.width = window.innerWidth;
        this.Canvas.height = window.innerHeight;

        window.addEventListener('keydown', (event) => {
          this.Controls = keydown(event, this.Controls);
        }, false);

        window.addEventListener('keyup', (event) => {
          this.Controls = keyup(event, this.Controls);
        }, false);

        window.requestAnimationFrame(this.loop);


        resolve();
      };

      this.Mario.mariosheet.src = '/static/game/mariosheet.png';
    });
  }

  initDecors = () => {
    this.Decors.sheet = new Image();

    return new Promise((resolve, reject) => {
      const setTimeoutID = setTimeout(() => reject(Error('Timeout exceed 2sec')), 2000);

      this.Decors.sheet.onload = () => {
        clearTimeout(setTimeoutID);
        this.Decors.Context2D.mozImageSmoothingEnabled = true;
        this.Decors.Context2D.webkitImageSmoothingEnabled = true;
        this.Decors.Context2D.msImageSmoothingEnabled = true;
        this.Decors.Context2D.imageSmoothingEnabled = true;
        defaultDecors(this.Decors);

        resolve();
      };

      this.Decors.sheet.src = '/static/game/sprite.png';
    });
  }

  draw = () => {
    this.Context2D.clearRect(this.Mario.X - 20, this.Mario.Y - 20, 54 + 40, 54 + 40);
    this.Context2D.drawImage(this.Mario.mariosheet, 10, 5, 14, 27, this.Mario.X, this.Mario.Y, 28, 54);
  }
}

export default Engine;
