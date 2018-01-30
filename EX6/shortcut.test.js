const shortcut = require('./shortcuts');

describe('checking the use case ', () => {
  it('checking that resolve has been called', () => {
    expect(shortcut.promiseResolve).resolves.toBe('hi');
  });
  it('checking that catch works', () => {
    shortcut.promiseReject.catch(err => expect(err.message).toBe('ssecret'));
  });
});
