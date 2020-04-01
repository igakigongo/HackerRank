const workbook = (_, k, arr) => {
  let pages = 0;
  let startPage = 1;
  let endPage = 0;

  return arr.reduce((a, c) => {
    pages = c % k === 0 ? c / k : parseInt(c / k, 10) + 1;
    endPage = startPage + pages - 1;

    let problem = 0;
    let specials = 0;
    for (let start = startPage; start <= endPage; start += 1) {
      for (let i = 0; i < k; i += 1) {
        problem += 1;
        if (problem === start) specials += 1;
        if (problem >= c) break;
      }
    }

    startPage = endPage + 1;
    return a + specials;
  }, 0);
};

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
