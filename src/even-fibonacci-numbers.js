function format(num) {
  return num.toString().replace('n', '');
}

function sum(limit) {
  let fn_2 = 2n;
  let fn_1 = 8n;
  let sum = fn_2 + fn_1;
  if (limit <= 10n) return format(sum);

  while (true) {
    let next = 4n * fn_1 + fn_2;
    if (next > limit) return format(sum);

    sum += next;
    fn_2 = fn_1;
    fn_1 = next;
  }
}

export default sum;
