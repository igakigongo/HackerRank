const workbook = (n, k, arr) => {
  let pages = 0;
  let startPage = 1;
  let endPage = 0;

  return arr.reduce((a, c, i) => {
    pages = c % k === 0 ? c / k : parseInt(c / k) + 1;
    endPage = startPage + pages - 1;

    let problem = 0;
    let specials = 0;
    for (let start = startPage; start <= endPage; start++) {
      for (let i = 0; i < k; i++) {
        problem++;
        if (problem === start) specials++;
        if (problem >= c) break;
      }
    }

    startPage = endPage + 1;
    return a + specials;
  }, 0);
};

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
