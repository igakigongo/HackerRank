const strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
  'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine',
];

export default (h, m) => {
  if (m === 0) {
    return `${strings[h - 1]} o' clock`;
  }
  if (m === 30) {
    return `half past ${strings[h - 1]}`;
  }
  const hour = h + (m > 30 ? 1 : 0);
  const minutes = m > 30 ? 60 - m : m;
  let time = `${strings[minutes - 1]}`;
  time += minutes < 2 ? ' minute' : '';
  time += minutes === 15 ? '' : ' minutes';
  time += ` ${m > 30 ? 'to' : 'past'}`;
  time += ` ${strings[hour - 1]}`;
  return time;
};
