import Engine, { debug, getCanvas } from '../Engine';

jest.unmock('../Engine.js');

describe('getCanvas', () => {
  it('should return canvas if exist', () => {
    expect(getCanvas('canvasId')).toBeDefined();
  });

  it('should return nothing and log the error', () => {
    expect(getCanvas('badCanvasId')).toBeUndefined();
    expect(debug).toHaveBeenCalledTimes(1);
  });
});

describe('Engine', () => {
  describe('init', () => {
    it('should init engine without trouble', () => {
      expect.assertions(1);
      const instance = new Engine();

      expect(instance).toBeInstanceOf(Engine);
    });
  });

  describe('addDecors', () => {
    let instance = null;

    beforeEach(() => {
      instance = new Engine();
    });

    it('should exist', () => {
      expect(instance.addDecors).toBeDefined();
    });

    it('should not add decors when canvasId not existing', async () => {
      expect(instance.decors.length).toBe(0);
      await instance.addDecors(undefined, {}, 'src/sprite.png');
      expect(instance.decors.length).toBe(0);
    });

    it('should not add decors when decor is undefined', async () => {
      expect(instance.decors.length).toBe(0);
      await instance.addDecors('canvasId', undefined, 'src/sprite.png');
      expect(instance.decors.length).toBe(0);
    });

    it('should not add decors when sprite isn\'t found', async () => {
      expect(instance.decors.length).toBe(0);
      await instance.addDecors('canvasId', {}, 'src/bad_sprite.png');
      expect(instance.decors.length).toBe(0);
    });

    fit('should add a new decor', async () => {
      expect(instance.decors.length).toBe(0);
      await instance.addDecors('canvasId', {}, 'src/sprite.png');
      expect(instance.decors.length).toBe(1);
    });
  });
});
