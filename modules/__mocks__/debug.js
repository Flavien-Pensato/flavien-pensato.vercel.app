const mock = jest.fn().mockImplementation(moduleName => jest.fn(message => moduleName.concat(' ').concat(message)));

export default mock;
