import {
  debug, getCanvas, loadSprite, addElement,
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

  describe('loadSprite', () => {
    it('should load my image', async () => {
      expect.assertions(1);

      try {
        const sprite = await loadSprite('src/sprite.png');

        expect(sprite).toBeDefined();
      } catch (error) {
        throw new Error(error);
      }
    });

    it('should throw error when image not found', async () => {
      expect.assertions(1);

      try {
        await loadSprite('src/bad_sprite.png');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
      }
    });
  });


  describe('addElement', () => {
    it('should add my element with his sprite', async () => {
      const element = await addElement({ name: 'toto' }, 'src/sprite.png');
      expect(element).toMatchSnapshot();
    });

    it('should fail because of sprite and return null', async () => {
      const element = await addElement({ name: 'toto' }, 'src/bad_sprite.png');

      expect(element).toBeNull();
      expect(debug).toHaveBeenCalledWith('No Element added. Missing `Sprite`.');
    });

    it('should fail because of element and return null', async () => {
      const element = await addElement(undefined, 'src/sprite.png');

      expect(element).toBeNull();
      expect(debug).toHaveBeenCalledWith('No Element added. Missing `Element`.');
    });
  });
});
