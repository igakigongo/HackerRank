const subStrIsPalindrome = (str, left, right) => {
  while (left <= right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
};

const palindromeIndex = (str) => {
  let left = 0; let
    right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      if (subStrIsPalindrome(str, left + 1, right)) return left;
      if (subStrIsPalindrome(str, left, right - 1)) return right;
    }
    left++;
    right--;
  }
  return -1;
};

// Test cases
console.log(`"a" is palindrome? ${palindromeIndex('a')}`);
console.log(`"abab" is palindrome? ${palindromeIndex('abab')}`);
console.log(`"abab" is palindrome? ${palindromeIndex('abab')}`);
console.log(`"aaab" is palindrome? ${palindromeIndex('aaab')}`);
console.log(`"pap" is palindrome? ${palindromeIndex('pap')}`);


// "a, b, b, a, e, c, a, b, b, a"
//  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
