

/**
 * Recursive Solution
 *
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = cost => {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }
  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};

/**
 * Dynamic Programming Solution
 *
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairsDP = cost => {
  const n = cost.length;
  const dp = Array(n).fill(0);

  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[n - 1], dp[n - 2]);
};

export { minCostClimbingStairs, minCostClimbingStairsDP };
