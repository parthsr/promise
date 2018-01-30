const shortcut = require('./shortcuts');

describe('checking the use case ', () => {
  it('checking that resolve has been called', () => {
    expect(shortcut.promiseResolve).resolves.toBe('hi');
  });
});
