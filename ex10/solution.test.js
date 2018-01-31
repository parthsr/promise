const solution = require('./solution');

describe('testing the use case of the program', () => {
  it('checking if rhe alwaysThrows gives the right input', () => expect(solution.alwaysThrows).toThrow('OH NOES'));

  it('checking if the iterate function is working', () => expect(solution.iterate(1)).toBe(2));

  it('checkind the chaining works or not', () => solution.promise.then(value => expect(value).toEqual('OH NOES')));
});
