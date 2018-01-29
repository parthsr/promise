const settimeout = require('./setT');

describe('checking usecase for the setT.js', () => {
  jest.useFakeTimers();
  test('waits 1 second before ending the game', () => {
    settimeout('hello');
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  test('waits 1 second before ending the game', () => {
    settimeout('hello');
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
  });
});

describe('checking usecase for the setT.js', () => {
  test('waits 1 second before ending the game', () => {
    expect(settimeout(null)).toBe(false);
  });
  test('waits 1 second before ending the game', () => {
    expect(settimeout(undefined)).toBe(false);
  });
});
