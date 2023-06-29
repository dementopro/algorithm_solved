

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  const map = {};

  // Count the characters
  for (let c of s) {
    map[c] = ~~map[c] + 1;
  }

  // Find the unique character
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

export default firstUniqChar;
