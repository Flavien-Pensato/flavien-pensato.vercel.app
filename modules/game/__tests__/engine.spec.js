import Engine from '../Engine';

jest.unmock('../Engine.js');


describe('Engine', () => {
  describe('init', () => {
    it('should init engine without trouble', () => {
      expect.assertions(1);
      const instance = new Engine();

      expect(instance).toBeInstanceOf(Engine);
    });
  });
});
