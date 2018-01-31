const chain = require('./chain');

describe('checking use case', () => {
  it('checking if the printing is as expected', () => {
    expect(chain.promise.then(chain.attachTitle).then(value => expect(value).toBe('DR. MANHATTAN')));
  });
});
