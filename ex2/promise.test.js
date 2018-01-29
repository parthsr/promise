const promise = require('./promise');

describe('usecase test case', () => {
  it('test case 1', () => expect(promise).resolves.toBe('FULFILLED!'));
});
