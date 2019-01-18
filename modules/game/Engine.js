import { defaultCaracter, update } from './caracter';
import { keydown, keyup, defaultControlsStatus } from './controls';

class Engine {
  constructor(canvasId) {
    this.Canvas = document.getElementById(canvasId);
    this.Context2D = this.Canvas.getContext('2d');
    this.Delta = 0;
    this.Interval = 1000 / 30;
    this.LastTime = (new Date()).getTime();
    this.CurrentTime = 0;
    this.Mario = defaultCaracter(32, this.Canvas.height - 32);
    this.Controls = defaultControlsStatus;
  }

  loop = () => {
    window.requestAnimationFrame(this.loop);

    this.CurrentTime = (new Date()).getTime();
    this.Delta = (this.CurrentTime - this.LastTime);

    if (this.Delta > this.Interval) {
      update(this.Mario, this.Controls, this.Canvas.height - 32);
      this.draw();
      this.LastTime = this.CurrentTime - (this.Delta % this.Interval);
    }
  }

   init = () => {
     this.Mario.mariosheet = new Image();

     return new Promise((resolve, reject) => {
       const setTimeoutID = setTimeout(() => reject(Error('Timeout exceed 2sec')), 2000);

       this.Mario.mariosheet.onload = () => {
         clearTimeout(setTimeoutID);

         this.Context2D.drawImage(this.Mario.mariosheet, 0, 0, 32, 32, this.Mario.X, this.Mario.Y, 32, 32);

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

   draw = () => {
     this.Context2D.clearRect(0, 0, this.Canvas.width, this.Canvas.height);

     this.Context2D.drawImage(this.Mario.mariosheet, 0, 0, 32, 32, this.Mario.X, this.Mario.Y, 32, 32);
   }
}

export default Engine;
