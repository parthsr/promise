const reject = require('./reject');

describe('describing the use case of the program', () => {
  it('test case 1 for checking error', () => {
    expect(reject.promise).rejects.toMatch('REJECTED!');
  });
  it('testCase 2 for checking execution', () => {
    expect(reject.promise).resolves.toBe('pass');
  });
  it('testCase 3 for checking onReject', () => {
    (global.console.log) = jest.fn();
    reject.onReject('hello');
    expect((console.log)).toHaveBeenCalledTimes(1);
  });
  it('testCase 3 for checking onReject', () => {
    (global.console.log) = jest.fn();
    reject.onReject(new Error('kk'));
    expect((console.log)).toHaveBeenCalledTimes(1);
  });
});
