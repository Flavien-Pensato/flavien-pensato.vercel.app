import debugFactory from 'debug';

import { loadSprite, addElement } from './utils';

import { drawDecor } from './decors';
import {
  checkCollisionUpDown, stop, running1, running2, running3, running4,
} from './caracter';
import Controller from './Controller';

export const debug = debugFactory('engine');


export const clear = (elements) => {
  elements.forEach((element) => {
    element.Context2D.clearRect(element.X, element.Y, element.canvas.width, element.canvas.height);
  });
};
export const draw = (elements) => {
  elements.forEach((element) => {
    element.Context2D.drawImage(element.Sprite, element.canvas.Sx, element.canvas.Sy, element.canvas.Swidth,
      element.canvas.Sheight, element.X, element.Y, element.canvas.width, element.canvas.height);
  });
};

class Engine {
  constructor(domId) {
    this.dom = document.getElementById(domId);
    this.playing = false;
    this.lastFrameTimeMs = 0;
    this.imageBySecond = 0;
    this.fps = 60;
    this.timestep = 1000 / this.fps;
    this.delta = 0;
    this.sprites = [];
    this.decors = [];
    this.characters = [];
    this.world = null;
  }

  start = () => {
    this.playing = true;
    this.Controller = new Controller();
    this.Controller.init();
    window.requestAnimationFrame(this.loop);
  }

  stop = () => {
    this.Controller.destroy();
    this.playing = false;

    delete this.Controller;
  }

  addCharacter = async (character, spriteSource) => {
    let player = this.dom.querySelector('.player');

    if (!player) {
      player = document.createElement('canvas');
      player.classList.add('player');
      player.height = this.dom.offsetHeight;
      player.width = this.dom.offsetWidth;

      this.dom.appendChild(player);
    }


    const element = await addElement(character, spriteSource);

    if (element) {
      this.characters.push({ ...element, Context2D: player.getContext('2d') });
    }
  }

  loadWorld = async (map) => {
    this.map = map;
    const oldWold = this.dom.querySelector('.world');
    const newWorld = document.createElement('canvas');
    const sprite = await loadSprite('/static/game/sprite.png');

    newWorld.classList.add('world');
    newWorld.height = this.dom.offsetHeight;
    newWorld.width = this.dom.offsetWidth;

    if (oldWold) {
      oldWold.remove();
    }

    this.dom.appendChild(newWorld);

    let x = 0;
    let y = newWorld.height;

    this.map.forEach((line) => {
      line.forEach((value) => {
        drawDecor(x, y, value, newWorld.getContext('2d'), sprite);
        x += 30;
      });

      y -= 30;
      x = 0;
    });
  }

  loop = (timestamp) => {
    let numUpdateSteps = 0;
    this.delta += timestamp - this.lastFrameTimeMs;
    this.lastFrameTimeMs = timestamp;

    if (this.playing) {
      clear(this.characters);

      while (this.delta >= this.timestep) {
        this.characters.forEach((element) => {
          this.update(element);
        });

        this.delta -= this.timestep;

        if (++numUpdateSteps >= 240) {
          this.delta = 0;
          window.requestAnimationFrame(this.loop);
          break;
        }
      }

      if (this.imageBySecond >= 60) {
        this.imageBySecond = 0;
      }

      draw(this.characters);
      this.imageBySecond++;

      window.requestAnimationFrame(this.loop);
    }
  }

  update = (character) => {
    const activeKey = this.Controller.getActiveKey();
    switch (activeKey) {
      case 'up': {
        if (character.onGround) {
          character.gravity.value = -character.gravity.max - 0.2;
          character.onGround = false;
        }
        break;
      }
      case 'right':
      case 'left': {
        character.motion.value += character.motion.speed;

        if (character.motion.value >= character.motion.max) {
          character.motion.value = character.motion.max;
        }

        const motion = character.motion.value * this.timestep;

        if (this.imageBySecond < 15) {
          character.canvas = running1;
        } else if (this.imageBySecond >= 30 && this.imageBySecond < 45) {
          character.canvas = running4;
        } else if (this.imageBySecond >= 15 && this.imageBySecond < 30) {
          character.canvas = running3;
        } else if (this.imageBySecond >= 45 && this.imageBySecond <= 60) {
          character.canvas = running2;
        }
        character.direction = this.Controller.getActiveKey();
        character.X += activeKey === 'right' ? motion : (-1 * motion);
        break;
      }

      default:
        character.motion.value = 0;
        character.canvas = stop;
        break;
    }

    character.gravity.value += character.gravity.speed;

    if (character.gravity.value >= character.gravity.max) {
      character.gravity.value = character.gravity.max;
    }

    character.Y = checkCollisionUpDown(character, this.dom.offsetHeight, this.timestep);

    return character;
  };
}

export default Engine;
