

/**
 * Recursion
 *
 * @param {number} n
 * @return {number}
 */
const getMoneyAmountR = n => {
  return helper(1, n);
};

const helper = (start, end) => {
  if (start >= end) {
    return 0;
  }

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = start; i <= end; i++) {
    const val = i + Math.max(helper(start, i - 1), helper(i + 1, end));
    min = Math.min(min, val);
  }

  return min;
};

/**
 * Dynamic Programming
 *
 * @param {number} n
 * @return {number}
 */
const getMoneyAmount = n => {
  const dp = Array(n + 2)
    .fill()
    .map(() => Array(n + 2).fill(0));

  for (let len = 2; len <= n; len++) {
    for (let start = 1; start + len - 1 <= n; start++) {
      const end = start + len - 1;

      dp[start][end] = Number.MAX_SAFE_INTEGER;

      for (let i = start; i <= end; i++) {
        const val = i + Math.max(dp[start][i - 1], dp[i + 1][end]);
        dp[start][end] = Math.min(dp[start][end], val);
      }
    }
  }

  return dp[1][n];
};

export { getMoneyAmountR, getMoneyAmount };
