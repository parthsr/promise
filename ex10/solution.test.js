const solution = require('./solution');

describe('testing the use case of the program', () => {
  it('checking if rhe alwaysThrows gives the right input', () => {
    expect(solution.alwaysThrows()).toEqual(Error('OH NOES'));
  });
});
