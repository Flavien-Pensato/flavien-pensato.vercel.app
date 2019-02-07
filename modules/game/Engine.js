import debugFactory from 'debug';

import { addElement } from './utils';

import { update } from './caracter';
// import { defaultDecors } from './decors';
import { keydown, keyup, defaultControlsStatus } from './controls';

export const debug = debugFactory('engine');


export const draw = (element) => {
  element.Context2D.clearRect(element.X - 20, element.Y - 20, 54 + 40, 54 + 40);
  element.Context2D.drawImage(element.Sprite, 10, 5, 14, 27, element.X, element.Y, 28, 54);
};

class Engine {
  constructor() {
    this.playing = false;
    this.LastFrameTimeMs = 0;
    this.Timestep = 1000 / 60;
    this.Delta = 0;
    this.decors = [];
    this.characters = [];
    this.Controls = defaultControlsStatus;

    window.addEventListener('keydown', (event) => {
      this.Controls = keydown(event, this.Controls);
    }, false);

    window.addEventListener('keyup', (event) => {
      this.Controls = keyup(event, this.Controls);
    }, false);
  }

  start = () => {
    this.playing = true;
    window.requestAnimationFrame(this.loop);
  }

  stop = () => {
    this.playing = false;
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
    this.Delta += timestamp - this.LastFrameTimeMs;
    this.LastFrameTimeMs = timestamp;

    while (this.Delta >= this.Timestep) {
      update(this.Mario, this.Controls, this.Decors, this.Timestep);
      this.Delta -= this.Timestep;
    }

    this.draw(this.Mario);

    if (this.playing) {
      window.requestAnimationFrame(this.loop);
    }
  }
}

export default Engine;
