import cancelled, { YES, NO } from '../src/angry-professor';

describe('angry professor', () => {
  test('should be cancelled', () => {
    expect(cancelled(3, [-1, -3, 4, 2])).toEqual(YES);
  });

  test('should not be cancelled', () => {
    expect(cancelled(2, [0, -1, 2, 1])).toEqual(NO);
  });
});
