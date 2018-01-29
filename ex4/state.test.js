const state = require('./state');

describe('checking use case', () => {
  it('test case 1', () => {
    expect(state).resolves.toBe('I FIRED');
  });
  it('test case 1', () => {
    expect(state).rejects.toMatch('I DID NOT FIRED');
  });
});
