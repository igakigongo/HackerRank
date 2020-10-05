import sum from '../src/even-fibonacci-numbers';

test('even fibonacci numbers', () => {
  expect(sum(10)).toEqual('10');
  expect(sum(100)).toEqual('44');
  expect(sum(4 * Math.pow(10, 16))).toEqual('49597426547377748');
});
