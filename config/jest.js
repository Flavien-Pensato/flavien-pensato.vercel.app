import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';


const LOAD_FAILURE_SRC = 'src/bad_sprite.png';
const LOAD_SUCCESS_SRC = 'src/sprite.png';

Object.defineProperty(global.Image.prototype, 'src', {
  set(src) {
    if (src === LOAD_FAILURE_SRC) {
      setTimeout(() => (this.onerror ? this.onerror(new Error('mocked error')) : null), 0);
    } else if (src === LOAD_SUCCESS_SRC) {
      setTimeout(() => (this.onload ? this.onload() : null), 0);
    }
  },
});

// const CANVAS_FAILURE = 'badCanvasId';
const CANVAS_SUCCESS = 'canvasId';

Object.defineProperty(document, 'getElementById', {
  value: (arg) => {
    if (arg === CANVAS_SUCCESS) {
      return {
        getContext: jest.fn(),
      };
    }

    return undefined;
  },
});

Enzyme.configure({ adapter: new Adapter() });
