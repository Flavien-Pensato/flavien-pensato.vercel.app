import debugFactory from 'debug';

import {
  loadSprite, draw,
} from './utils';
// import {
//   loadSprite, addElement, draw, clean,
// } from './utils';

import { drawDecor } from './decors';
// import { checkCollisionUpDown } from './caracter';
// import Controller from './Controller';

export const debug = debugFactory('engine');

let instance = null;

class Engine {
  static create() {
    if (!instance) {
      instance = new Engine();
    }

    return instance;
  }

  constructor() {
    this.lastTick = window.performance.now();
    this.lastRender = this.lastTick;
    this.tickLength = 50;
    this.worlds = [];
    this.characters = [];
    this.loop(this.lastTick);
  }

  stop = () => {
    window.cancelAnimationFrame(this.lastRequedtId);
  }

  addCharacter = async (character, config) => {
    const sprite = await loadSprite(config.sprite);
    character.height = character.offsetHeight;
    character.width = character.offsetWidth;

    if (character) {
      this.characters.push({
        ...config, sprite, Y: (this.worlds[0].ratioY - 4) * 30 + config.Sy, canvas: character.getContext('2d'),
      });
    }


    draw(this.characters);
  }

  loadWorld = async (world, config) => {
    world.height = world.offsetHeight;
    world.width = world.offsetWidth;
    const ratioY = Math.ceil(world.height / 30);
    const ratioX = Math.ceil(world.width / 30);

    const sprite = await loadSprite('/static/game/sprite.png');

    if (config && world) {
      this.worlds.push({
        map: config, ratioX, ratioY, canvas: world, sprite,
      });
    }

    const ctx = world.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(0, 0);
    const margeY = ratioY - config.length + 1;

    for (let y = 0; y < ratioY; y++) {
      for (let x = 0; x < ratioX; x++) {
        const elem = config[y] ? config[y][x] : null;
        // ctx.strokeRect(x * 30, y * 30, 30, 30);
        if (elem) {
          drawDecor(x * 30, (y + margeY) * 30, elem, world.getContext('2d'), sprite);
        }
      }
    }
    ctx.closePath();
  }

  loop = (timestamp) => {
    this.lastRequedtId = window.requestAnimationFrame(this.loop);

    const nextTick = this.lastTick + this.tickLength;
    let numTicks = 0;

    if (timestamp >= nextTick) {
      numTicks = Math.floor((timestamp - this.lastTick) / this.tickLength);
    }

    this.queueUpdates(numTicks);
    this.render(timestamp);
    this.lastRender = timestamp;
  }

  queueUpdates = (numTicks) => {
    for (let i = 0; i < numTicks; i++) {
      this.lastTick += this.tickLength;
      this.update(this.lastTick);
    }
  }

  update = () => {
    // console.log(`Update delta: ${delta}`);
  }

  render = () => {
    // console.log(`Render delta: ${delta}`);
  }

  // update = (character) => {
  //   const activeKey = this.Controller.getActiveKey();
  //   switch (activeKey) {
  //     case 'up': {
  //       if (character.onGround) {
  //         character.gravity.value = -character.gravity.max - 0.2;
  //         character.onGround = false;
  //       }
  //       break;
  //     }
  //     case 'right':
  //     case 'left': {
  //       character.motion.value += character.motion.speed;

  //       if (character.motion.value >= character.motion.max) {
  //         character.motion.value = character.motion.max;
  //       }

  //       const motion = character.motion.value * this.timestep;

  //       character.direction = this.Controller.getActiveKey();
  //       character.X += activeKey === 'right' ? motion : (-1 * motion);
  //       break;
  //     }

  //     default:
  //       character.motion.value = 0;
  //       break;
  //   }

  //   character.gravity.value += character.gravity.speed;

  //   if (character.gravity.value >= character.gravity.max) {
  //     character.gravity.value = character.gravity.max;
  //   }

  //   character.Y = checkCollisionUpDown(character, this.dom.offsetHeight, this.timestep);

  //   return character;
  // };
}

export default Engine;
