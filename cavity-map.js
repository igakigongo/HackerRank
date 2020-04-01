const cavityMap = (grid) => {
  const len = grid.length;

  for (let x = 1; x <= len - 2; x++) {
    for (let y = 1; y <= len - 2; y++) {
      const val = grid[x][y];
      const top = grid[x - 1][y];
      const right = grid[x][y + 1];
      const bottom = grid[x + 1][y];
      const left = grid[x][y - 1];

      if (val > top && val > right && val > bottom && val > left) {
        const a = new Array(...grid[x]);
        a[y] = 'X';
        grid[x] = a.join('');
      }
    }
  }

  return grid;
};

console.log(cavityMap(['989', '191', '111']));
console.log(cavityMap(['1112', '1912', '1892', '1234']));
