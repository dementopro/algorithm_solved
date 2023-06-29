

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => {
  if (!nums || nums.length == 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else {
    return Math.max(helper(nums, 0, nums.length - 2), helper(nums, 1, nums.length - 1));
  }
};

const helper = (nums, start, end) => {
  const n = end - start + 1;
  const dp = Array(n + 1).fill(0);

  dp[1] = nums[start];

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1], nums[start + i - 1] + dp[i - 2]);
  }

  return dp[n];
};

export { rob };
