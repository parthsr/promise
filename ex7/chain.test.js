const chain = require('./chain');

describe('testing use case', () => {
  it('checking first function', () => {
    expect(chain.first()).resolves.toBe('secretValue');
  });
});
