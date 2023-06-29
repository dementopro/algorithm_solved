

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringTwoDistinct = s => {
  const k = 2;
  const map = {};
  let max = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    // Step 1. count the character
    map[s[j]] = ~~map[s[j]] + 1;

    // Step 2. clean up the map if condition does't match
    while (Object.keys(map).length > k) {
      if (--map[s[i]] === 0) {
        delete map[s[i]]; // that character count has become 0
      }
      i++;
    }

    // Step 3. condition matched, now update the result
    max = Math.max(max, j - i + 1);
  }

  return max;
};

export { lengthOfLongestSubstringTwoDistinct };
