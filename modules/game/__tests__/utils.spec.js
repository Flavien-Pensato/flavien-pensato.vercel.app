import {
  debug, getCanvas, addElement,
} from '../utils';

jest.unmock('../utils.js');


describe('utils', () => {
  describe('getCanvas', () => {
    it('should return canvas if exist', () => {
      expect(getCanvas('canvasId')).toBeDefined();
    });

    it('should return nothing and log the error', () => {
      expect(getCanvas('badCanvasId')).toBeUndefined();
      expect(debug).toHaveBeenCalledTimes(1);
    });
  });

  describe('loadSprite', () => {});


  describe('addElement', () => {
    it('should not add decors when canvasId not existing', async () => {
      const element = await addElement(undefined, {}, 'src/sprite.png');
      expect(element).toBeNull();
    });

    it('should not add decors when decor is undefined', async () => {
      const element = await addElement('canvasId', undefined, 'src/sprite.png');

      expect(element).toBeNull();
    });

    it('should not add decors when sprite isn\'t found', async () => {
      const element = await addElement('canvasId', {}, 'src/bad_sprite.png');

      expect(element).toBeNull();
    });

    it('should add a new decor', async () => {
      const element = await addElement('canvasId', {}, 'src/sprite.png');

      expect(element).toBeDefined();
    });
  });
});
