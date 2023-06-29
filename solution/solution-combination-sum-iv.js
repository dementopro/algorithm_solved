

/**
 * Recursion Solution
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = (nums, target) => {
  if (target == 0) {
    return 1;
  }

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (target >= nums[i]) {
      res += combinationSum4(nums, target - nums[i]);
    }
  }

  return res;
};

/**
 * Dynamic Programming Solution
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4_II = (nums, target) => {
  const dp = Array(target + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]];
      }
    }
  }

  return dp[target];
};

export { combinationSum4, combinationSum4_II };
