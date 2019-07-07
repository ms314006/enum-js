import newEnum from '../src';

describe('Test newEnum excute result.', () => {
  test('Test newEnum excute result.', () => {
    const input = {
      success: '200', error: '400',
    };
    const output = {
      success: '200', 200: 'success', error: '400', 400: 'error',
    };
    expect(newEnum(input)).toEqual(output);
  });

  test('test input empty object', () => {
    expect(newEnum({})).toEqual({});
  });
});
