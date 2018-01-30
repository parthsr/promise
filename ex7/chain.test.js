const chain = require('./chain');

describe('testing use case', () => {
  it('checking first function', () => {
    expect(chain.first()).resolves.toBe('secretValue');
  });
  it('checking first function', () => {
    expect(chain.second('hi')).resolves.toBe('hi');
  });
});
