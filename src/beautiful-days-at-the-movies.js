const reversedNumber = (num) => num
  .toString()
  .split('')
  .reverse()
  .join('');

const absoluteDiff = (num) => Math
  .abs(num - parseInt(reversedNumber(num), 10));

const beautifulDays = (start, end, divisor) => {
  let total = 0;
  for (let k = start; k <= end; k += 1) {
    total += (absoluteDiff(k) % divisor === 0) * 1;
  }

  return total;
};

export default beautifulDays;
