const parsePromised = require('./err');

describe('trying out the use case of the problem', () => {
  it('test case one to check what is printing with valid json', () => expect(parsePromised('{ "abc": "1" }')).resolves.toEqual(JSON.parse('{ "abc": "1" }')));
  it('test case 2 to check what is printing with valid json', () => expect(parsePromised('ksks')).rejects.toEqual('Unexpected token k in JSON at position 0'));
  it('test case 3 to check if promise is being returned or not', () => expect(parsePromised(22)).toBeInstanceOf(Promise));
  it('test case 3 to check if promise is being returned or not', () => parsePromised('{ "abc": "1" }').then(value => expect(value).toEqual({ abc: '1' })));
});
