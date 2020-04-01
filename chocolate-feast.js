const chocolateFeast = (n, c, m) => {
  let bars = parseInt(n / c);
  let b = bars;
  while (1) {
    const q = parseInt(b / m);
    const r = b % m;
    if (b < m) break;
    bars += q;
    b = q + r;
  }
  return bars;
};

console.log(chocolateFeast(15, 3, 2));
console.log(chocolateFeast(10, 2, 5));
console.log(chocolateFeast(12, 4, 4));
console.log(chocolateFeast(6, 2, 2));
console.log(chocolateFeast(7, 3, 2));
