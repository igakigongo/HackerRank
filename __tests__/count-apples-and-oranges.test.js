import count, { totalInRange } from '../count-apples-and-oranges';

describe('count apples and oranges', () => {
  test('one fruit falls on the house', () => {
    const apples = [-2, 2, 1];
    const oranges = [5, -6];
    const [appleTreeLocation, orangeTreeLocation] = [5, 15];

    expect(totalInRange(7, 11, appleTreeLocation, apples)).toEqual(1);
    expect(totalInRange(7, 11, orangeTreeLocation, oranges)).toEqual(1);

    expect(count(7, 11, 5, 15, apples, oranges)).toEqual(2);
  });
});
