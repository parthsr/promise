const async = require('./async.js');

describe('checking the use case', () => {
  // global.console.log = jest.fn();
  it('test case 1 by passing console.log', () => {
    console.log('1');
    async.then(console.log);
    async.then((val) => {
      console.log('5', val);
    });

    async.then((val) => {
      console.log('6', val);
    });
    console.log('8');
    expect(console.log).toHaveBeenCalledWith('MAIN PROGRAM');
  });

  // it('test case 2 for checking if resolve works or not', () => {
  //   expect(async).resolves.toBe('PROMISE VALUE');
  // });
});
