const parsePromised = require('./err');

describe('trying out the use case of the problem', () => {
  it('test case one to check what is printing with valid json', () => {
    parsePromised({ abc: 1 }).then(value => expect(value).toBe('parsing successful'));
  });
});
