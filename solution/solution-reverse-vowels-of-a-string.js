

import { swap } from 'utils/swap';

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = s => {
  const isVowel = c => 'aeiou'.includes(c.toLowerCase());
  let arr = s.split('');

  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    while (i < j && !isVowel(s[i])) {
      i++;
    }
    while (j > i && !isVowel(s[j])) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  return arr.join('');
};

export default reverseVowels;
