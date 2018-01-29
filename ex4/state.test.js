const state = require('./state');

describe('checking use case', () => {
  it('test case 1 for resolves function', () => {
    expect(state.promise).resolves.toBe('I FIRED');
  });
  it('test case 2 for rejects function', () => {
    expect(state.promise).rejects.toMatch('I DID NOT FIRED');
  });
  it('testCase 3 for checking onReject when fullfil', () => {
    (global.console.log) = jest.fn();
    state.onRejected('hello');
    expect((console.log)).toHaveBeenCalledTimes(1);
  });
  it('testCase 4 for checking onReject when reject', () => {
    (global.console.log) = jest.fn();
    state.onRejected(new Error('kk'));
    expect((console.log)).toHaveBeenCalledTimes(1);
  });
});
