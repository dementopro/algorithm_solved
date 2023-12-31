

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
  const set = new Set();
  let max = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    // Step 1. clean up the set if condition doesn't match
    while (set.has(s[j])) {
      set.delete(s[i]);
      i++;
    }

    // Step 2. condition matched, now update the result
    set.add(s[j]);
    max = Math.max(max, set.size);
  }

  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringII = s => {
  let max = 0;
  const map = new Map();

  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i]) + 1);
    }

    map.set(s[i], i);
    max = Math.max(max, j - i + 1);
  }

  return max;
};

export { lengthOfLongestSubstring, lengthOfLongestSubstringII };
