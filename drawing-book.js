const pageCount = (n, p) => ((n - p) > (p - 1)
  ? parseInt(p / 2, 10) - parseInt(1 / 2, 10)
  : parseInt(n / 2, 10) - parseInt(p / 2, 10));

// console.log(pageCount(6, 2));
// console.log(pageCount(5, 4));
export default pageCount;
