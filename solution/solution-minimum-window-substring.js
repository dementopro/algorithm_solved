

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  // Build a map and count characters in t
  const map = {};
  for (let c of t) {
    map[c] = ~~map[c] + 1;
  }

  let start = 0;
  let size = Infinity;
  let counter = t.length;

  // Try to find the window in s with two pointers i, j
  for (let i = 0, j = 0; j < s.length; j++) {
    // Step 1. count the character
    if (map[s[j]]-- > 0) {
      counter--; // Found a character in t
    }

    // Step 2. condition matched (the current window contains all the characters in t)
    while (counter === 0) {
      if (j - i + 1 < size) {
        size = j - i + 1;
        start = i;
      }

      if (map[s[i++]]++ === 0) {
        counter++; // Make it invalid
      }
    }
  }

  return size === Infinity ? '' : s.substr(start, size);
};

export default minWindow;
