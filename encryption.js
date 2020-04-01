const encryption = (s) => {
  let rows = Math.floor(Math.sqrt(s.length));
  const cols = Math.ceil(Math.sqrt(s.length));
  if (rows * cols < s.length) rows++;

  let str = '';
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      str += s.charAt(i + (j * cols));
    }
    str += ' ';
  }

  return str;
};

console.log(encryption('haveaniceday'));
console.log(encryption('feedthedog'));
console.log(encryption('chillout'));
