

/**
 * Solution 1: Dynamic Programming
 *
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
  const n = s.length;
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(false));

  let count = 0;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]);

      if (dp[i][j]) {
        count++;
      }
    }
  }

  return count;
};

/**
 * Solution 2: Expand Around Center
 *
 * @param {string} s
 * @return {number}
 */
const countSubstringsExpandAroundCenter = s => {
  let count = 0;

  const expandAroundCenter = (s, i, j) => {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
      i--;
      j++;
      count++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(s, i, i);
    expandAroundCenter(s, i, i + 1);
  }

  return count;
};

export { countSubstrings, countSubstringsExpandAroundCenter };
