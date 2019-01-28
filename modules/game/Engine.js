import { defaultCaracter, update } from './caracter';
import { defaultDecors } from './decors';
import { keydown, keyup, defaultControlsStatus } from './controls';

class Engine {
  constructor(canvasId, canvaDecorsId) {
    this.Canvas = document.getElementById(canvasId);
    this.Context2D = this.Canvas.getContext('2d');
    this.LastFrameTimeMs = 0;
    this.Timestep = 1000 / 60;
    this.Delta = 0;
    this.Mario = defaultCaracter(32, this.Canvas.height - 32);
    this.Decors = {
      Canvas: document.getElementById(canvaDecorsId),
      Context2D: document.getElementById(canvaDecorsId).getContext('2d'),

    };
    this.Controls = defaultControlsStatus;
  }

  loop = (timestamp) => {
    window.requestAnimationFrame(this.loop);

    this.Delta += timestamp - this.LastFrameTimeMs;
    this.LastFrameTimeMs = timestamp;

    while (this.Delta >= this.Timestep) {
      update(this.Mario, this.Controls, this.Canvas.height - 32, this.Timestep);
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
    this.Context2D.clearRect(this.Mario.X - 4, this.Mario.Y - 4, 14 + 8, 27 + 8);
    this.Context2D.drawImage(this.Mario.mariosheet, 10, 5, 14, 27, this.Mario.X, this.Mario.Y, 14, 27);
  }
}

export default Engine;
