const pickingNumbers = (a) => {
  const arr = a.sort((x, y) => x - y);
  let len = arr.length;
  let max = 0;

  while (len > 0) {
    let count = 0;
    const first = arr[0];
    for (let i = 0; i < len; i++) {
      if (arr[i] === first || arr[i] === (first + 1)) {
        count++;
        arr.splice(i, 1);
        i--;
      }
    }
    if (count > max) max = count;
    len = arr.length;
  }
  return max;
};

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // 5
