const howManyGames = (p, d, m, s) => {
  let count = 0;
  let price = p;
  let sum = 0;

  while (sum <= s) {
    sum += price;
    count += sum <= s ? 1 : 0;
    price = price - d > m ? price - d : m;
  }

  return count;
};

console.log(howManyGames(20, 3, 6, 80));
console.log(howManyGames(20, 3, 6, 85));
