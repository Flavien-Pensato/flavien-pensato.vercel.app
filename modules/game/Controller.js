export const keys = {
  right: 'right',
  left: 'left',
  up: 'up',
  down: 'down',
};
export const keysMap = {
  39: keys.right,
  37: keys.left,
  38: keys.up,
  40: keys.down,
};

export const controlAction = value => (event, controlsStatus) => {
  const key = keysMap[event.keyCode];

  if (key) {
    return { ...controlsStatus, [key]: value };
  }

  return controlsStatus;
};

export const keyup = controlAction(false);
export const keydown = controlAction(true);

class Controller {
  constructor() {
    this.statusKeys = {
      [keys.left]: false,
      [keys.right]: false,
      [keys.up]: false,
      [keys.down]: false,
    };
  }

  init = () => {
    window.addEventListener('keydown', (event) => {
      this.statusKeys = keydown(event, this.statusKeys);
    }, false);

    window.addEventListener('keyup', (event) => {
      this.statusKeys = keyup(event, this.statusKeys);
    }, false);
  }

  getActiveKey = () => keys.some(key => this.statusKeys[key])

  destroy = () => {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }
}

export default Controller;
