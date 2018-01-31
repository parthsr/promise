const parsePromised = require('./err');

describe('trying out the use case of the problem', () => {
  it('test case one to check what is printing with valid json', () => {
    parsePromised({ abc: 1 }).then(value => expect(value).toBe('parsing successful'));
  });
  it('test case 2 to check what is printing with valid json', () => {
    parsePromised(22).then(null, value => expect(value).toBe('parsing successful'));
  });
  it('test case 3 to check if promise is being returned or not', () => {
    expect(parsePromised(22)).toBeInstanceOf(Promise);
  });
});
