

/**
 * Solution I - O(n^2) space
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = nums => {
  // Step 1. calculate the sum and make a sanity check
  let sum = nums.reduce((total, num) => total + num);

  if ((sum & 1) === 1) {
    return false;
  }

  sum /= 2;

  // Step 2. Initialize the dp table
  const n = nums.length;
  const dp = Array(n + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(sum + 1).fill(false);
  }

  dp[0][0] = true;

  for (let i = 1; i < n + 1; i++) {
    dp[i][0] = true;
  }
  for (let j = 1; j < sum + 1; j++) {
    dp[0][j] = false;
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < sum + 1; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= nums[i - 1]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
      }
    }
  }

  return dp[n][sum];
};

/**
 * Solution II - O(n) space
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartitionII = nums => {
  // Step 1. calculate the sum and make a sanity check
  let sum = nums.reduce((total, num) => total + num);

  if ((sum & 1) === 1) {
    return false;
  }

  sum /= 2;

  // Step 2. Initialize the dp table
  const n = nums.length;
  const dp = Array(sum + 1).fill(false);

  dp[0] = true;

  for (let num of nums) {
    for (let i = sum; i > 0; i--) {
      if (i >= num) {
        dp[i] = dp[i] || dp[i - num];
      }
    }
  }

  return dp[sum];
};

export { canPartition, canPartitionII };
