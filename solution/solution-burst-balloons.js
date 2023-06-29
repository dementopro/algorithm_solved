

/**
 * Recursion
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxCoinsR = nums => {
  return helper([1, ...nums, 1], 1, nums.length);
};

const helper = (nums, start, end) => {
  if (start > end) {
    return 0;
  }

  let max = 0;

  for (let i = start; i <= end; i++) {
    const val = helper(nums, start, i - 1) + nums[i] * nums[start - 1] * nums[end + 1] + helper(nums, i + 1, end);
    max = Math.max(val, max);
  }

  return max;
};

/**
 * Dynamic Programming
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxCoins = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  // Initialize dp[n + 2][n + 2] and fill with 0
  const dp = Array(n + 2)
    .fill()
    .map(() => Array(n + 2).fill(0));
  // Add 1 to both front and end to help calculation
  nums = [1, ...nums, 1];

  for (let len = 1; len <= n; len++) {
    for (let start = 1; start + len - 1 <= n; start++) {
      const end = start + len - 1;
      // From here it's the same as our recursive solution
      for (let i = start; i <= end; i++) {
        const val = dp[start][i - 1] + nums[i] * nums[start - 1] * nums[end + 1] + dp[i + 1][end];
        dp[start][end] = Math.max(val, dp[start][end]);
      }
    }
  }

  return dp[1][n];
};

export { maxCoinsR, maxCoins };
