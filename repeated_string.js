/**
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string s='abcac'  and n=10, the substring we consider is 'abcacabcac', the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
*/

function countInString(str, start, end) {
  let count = 0;
  for (let i = start; i < end;) {
    count += str[i++] === 'a' ? 1 : 0;
  }
  return count;
}

// Complete the repeatedString function below.
function repeatedString(s, n) {
  if (s.indexOf('a') === -1) return 0;

  var countInFullString = countInString(s, 0, s.length);

  var quotient = parseInt(n / (s.length));
  var remainder = n % (s.length);

  var countInRemainder = countInString(s, 0, remainder);

  return (quotient * countInFullString) + countInRemainder;
}