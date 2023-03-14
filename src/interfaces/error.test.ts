import { HTTPError } from './error.js';
describe('Given', () => {
  let error: HTTPError;
  beforeEach(() => {
    error = new HTTPError(418, 'Tea Pot', '');
  });
  test('should first', () => {
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(HTTPError);
    expect(error).toHaveProperty('statusCode', 400);
    expect(error).toHaveProperty('statusMessage', 'error');
    expect(error).toHaveProperty('message', '');
    expect(error).toHaveProperty('name', 'HTTPError');
  });
});
