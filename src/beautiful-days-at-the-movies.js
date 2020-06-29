const reversedNumber = (num) => num
  .toString()
  .split('')
  .reverse()
  .join('');

const absoluteMapper = (num) => Math
  .abs(num - parseInt(reversedNumber(num), 10));

const beautifulDays = (start, end, divisor) => {
  const array = [];
  for (let k = start; k <= end; k += 1) {
    array.push(k);
  }

  const total = array.map(absoluteMapper)
    .reduce((accumulated, current) => {
      if (current % divisor === 0) return accumulated + 1;
      return accumulated;
    }, 0);

  return total;
};

export default beautifulDays;
