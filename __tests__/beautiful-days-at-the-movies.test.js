import beautifulDays from '../src/beautiful-days-at-the-movies';

describe('beautiful days', () => {
  test('should be 2 days', () => {
    expect(beautifulDays(20, 23, 6)).toEqual(2);
  });
});
