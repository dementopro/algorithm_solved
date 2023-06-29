

/**
 * O(1) Space Solution
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  if (!nums) {
    return 0;
  }

  const n = nums.length;

  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let v1 = nums[0];
  let v2 = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const v = Math.max(v1 + nums[i], v2);
    v1 = v2;
    v2 = v;
  }

  return v2;
};

/**
 * O(n) Space Solution
 * @param {number[]} nums
 * @return {number}
 */
const robII = nums => {
  if (!nums || nums.length === 0) {
    return 0;
  }

  const n = nums.length;
  const dp = Array(n + 1).fill(0);

  dp[1] = nums[0];

  for (let i = 2; i <= n; i++) {
    // dp[i - 1], do not rob the i-th house, take whatever we had
    // dp[i - 2], rob the i-th house, make sure we skip i-1th house
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
  }

  return dp[n];
};

export { rob, robII };
