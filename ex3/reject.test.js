const reject = require('./reject');

describe('describing the use case of the program', () => {
  it('test case 1 for checking execution', () => {
    expect(reject.promise).rejects.toMatch('error');
  });
});
