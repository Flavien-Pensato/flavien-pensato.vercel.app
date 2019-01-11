const keysMap = {
  39: 'right',
  37: 'left',
  38: 'up',
  40: 'down',
};

const keydown = state => (event) => {
  const key = keysMap[event.keyCode];
  state.pressedKeys[key] = true;
};

const keyup = state => (event) => {
  const key = keysMap[event.keyCode];
  state.pressedKeys[key] = false;
};

const update = (state, progress) => {
  if (state.pressedKeys.left) {
    state.X -= progress;
  }
  if (state.pressedKeys.right) {
    state.X += progress;
  }
  if (state.pressedKeys.up) {
    state.Y -= progress;
  }
  if (state.pressedKeys.down) {
    state.Y += progress;
  }
};

class Engine {
  constructor(canvasId) {
    this.Canvas = document.getElementById(canvasId);
    this.Context2D = this.Canvas.getContext('2d');
    this.LastRender = 0;
    this.Mario = {
      X: 32,
      Y: 0,
      pressedKeys: {
        left: false,
        right: false,
        up: false,
        down: false,
      },
    };
  }

  loop = (timestamp) => {
    const progress = timestamp - this.LastRender;

    update(this.Mario, progress);
    this.draw();

    this.LastRender = timestamp;
    window.requestAnimationFrame(this.loop);
  }

   init = () => {
     this.Mario.mariosheet = new Image();

     return new Promise((resolve, reject) => {
       const setTimeoutID = setTimeout(() => reject(Error('Timeout exceed 2sec')), 2000);

       this.Mario.mariosheet.onload = () => {
         clearTimeout(setTimeoutID);

         this.Context2D.drawImage(this.Mario.mariosheet, 0, 0, 32, 32, this.Mario.X, this.Mario.Y, 32, 32);

         window.addEventListener('keydown', keydown(this.Mario), false);
         window.addEventListener('keyup', keyup(this.Mario), false);

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
