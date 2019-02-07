import debugFactory from 'debug';

import { addElement } from './utils';

import { update } from './caracter';
// import { defaultDecors } from './decors';
import Controller from './Controller';

export const debug = debugFactory('engine');


export const clear = (elements) => {
  elements.forEach((element) => {
    element.Context2D.clearRect(element.X, element.Y, element.width, element.height);
  });
};
export const draw = (elements) => {
  elements.forEach((element) => {
    element.Context2D.drawImage(element.Sprite, element.Sx, element.Sy, element.Swidth,
      element.Sheight, element.X, element.Y, element.width, element.height);
  });
};

class Engine {
  constructor() {
    this.playing = false;
    this.lastFrameTimeMs = 0;
    this.fps = 1000 / 60;
    this.delta = 0;
    this.decors = [];
    this.characters = [];
  }

  start = () => {
    this.playing = true;
    this.Controller = new Controller();
    window.requestAnimationFrame(this.loop);
  }

  stop = () => {
    this.Controller.destroy();
    this.playing = false;

    delete this.Controller;
  }

  addDecors = async (canvasId, decor, spriteSource) => {
    const element = addElement(canvasId, decor, spriteSource);

    if (element) {
      this.decors.push(element);
    }
  }

  addCharacter = async (canvasId, character, spriteSource) => {
    const element = addElement(canvasId, character, spriteSource);

    if (element) {
      this.characters.push(element);
    }
  }

  loop = (timestamp) => {
    this.delta += timestamp - this.lastFrameTimeMs;
    this.lastFrameTimeMs = timestamp;

    if (this.playing) {
      clear(this.characters);

      while (this.delta >= this.fps) {
        this.elements.forEach((element) => {
          update(element);
        });

        this.delta -= this.fps;
      }

      draw(this.characters);

      window.requestAnimationFrame(this.loop);
    }
  }

  update = (caracter) => {
    const activeKey = this.Controller.getActiveKey();

    switch (activeKey) {
      case 'up': {
        if (caracter.onGround) {
          caracter.gravity.value = -caracter.gravity.max - 0.2;
          caracter.onGround = false;
        }
        break;
      }
      case 'right':
      case 'left': {
        caracter.motion.value += caracter.motion.speed;

        if (caracter.motion.value >= caracter.motion.max) {
          caracter.motion.value = caracter.motion.max;
        }

        const motion = caracter.motion.value * this.delta;

        caracter.direction = this.Controller.getActiveKey();
        caracter.X += activeKey === 'right' ? motion : (-1 * motion);
        break;
      }

      default:
        caracter.motion.value = 0;
        break;
    }

    caracter.gravity.value += caracter.gravity.speed;

    if (caracter.gravity.value >= caracter.gravity.max) {
      caracter.gravity.value = caracter.gravity.max;
    }

    // caracter.Y = checkCollisionUpDown(caracter, decors, this.delta);

    return caracter;
  };
}

export default Engine;
