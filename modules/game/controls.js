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

export const defaultControlsStatus = {
  [keys.left]: false,
  [keys.right]: false,
  [keys.up]: false,
  [keys.down]: false,
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
