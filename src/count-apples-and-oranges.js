export const totalInRange = (s, t, treeLocation, array) => array
  .reduce((a, c) => {
    const fruitPosition = c + treeLocation;
    return a + (fruitPosition >= s && fruitPosition <= t) * 1;
  }, 0);

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const totalApplesInRange = totalInRange(s, t, a, apples);
  const totalOrangesInRange = totalInRange(s, t, b, oranges);
  return totalApplesInRange + totalOrangesInRange;
};

export default countApplesAndOranges;
