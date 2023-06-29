

/**
 * Solution I
 * Time Complexity: O(kn^2)
 *
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_I = (k, prices) => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  const n = prices.length;
  const dp = Array(k + 1);

  for (let i = 0; i <= k; i++) {
    dp[i] = Array(n).fill(0);
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1, max = 0; j < n; j++) {
      for (let m = 0; m < j; m++) {
        max = Math.max(max, dp[i - 1][m] + prices[j] - prices[m]);
      }

      dp[i][j] = Math.max(max, dp[i][j - 1]);
    }
  }

  return dp[k][n - 1];
};

/**
 * Solution II
 * Time Complexity: O(kn)
 *
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit_II = (k, prices) => {
  if (!prices || prices.length === 0) {
    return 0;
  }

  const n = prices.length;
  const dp = Array(k + 1);

  for (let i = 0; i <= k; i++) {
    dp[i] = Array(n).fill(0);
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1, maxProfit = dp[i - 1][0] - prices[0]; j < n; j++) {
      dp[i][j] = Math.max(dp[i][j - 1], maxProfit + prices[j]);
      maxProfit = Math.max(maxProfit, dp[i - 1][j] - prices[j]);
    }
  }

  return dp[k][n - 1];
};

export { maxProfit_I, maxProfit_II };
