

/**
 * Recursion Solution
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (p.length === 0) {
    return s.length === 0;
  }

  const isFirstMatch = s.length > 0 && (s[0] === p[0] || p[0] === '.');

  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (isFirstMatch && isMatch(s.substring(1), p));
  } else if (p.length >= 2 && p[1] === '+') {
    return isFirstMatch && isMatch(s.substring(1), p);
  } else {
    return isFirstMatch && isMatch(s.substring(1), p.substring(1));
  }
};

/**
 * Dynamice Programming Solution
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatchDP = (s, p) => {
  const sLen = s.length;
  const pLen = p.length;

  const dp = [];
  for (let i = 0; i <= sLen; i++) {
    dp[i] = Array(pLen + 1).fill(false);
  }

  dp[0][0] = true;

  for (let j = 1; j <= pLen; j++) {
    dp[0][j] = p[j - 1] === '*' && dp[0][j - 2];
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 2] || (isCharMatch(s[i - 1], p[j - 2]) && dp[i - 1][j]);
      } else if (p[j - 1] === '+') {
        dp[i][j] = isCharMatch(s[i - 1], p[j - 1]) && dp[i - 1][j];
      } else {
        dp[i][j] = isCharMatch(s[i - 1], p[j - 1]) && dp[i - 1][j - 1];
      }
    }
  }

  return dp[sLen][pLen];
};

const isCharMatch = (s, p) => s === p || p === '.';

export { isMatch, isMatchDP };
