

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const splitArray = nums => {
  if (nums.length < 7) {
    return false;
  }

  // Step 1. Calculate the prefix sum
  const sum = Array(nums.length).fill(0);
  sum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  // Here j is used for middle cut, i for left cut and k for right cut.
  // Iterate middle cuts and then find left cuts which divides the first
  // half into two equal quarters, store that quarter sums in the hashset.
  // Then find right cuts which divides the second half into two equal
  // quarters and check if quarter sum is present in the hashset.
  // If yes return true.
  for (let j = 3; j < nums.length - 3; j++) {
    const set = new Set();

    for (let i = 1; i < j - 1; i++) {
      if (sum[i - 1] == sum[j - 1] - sum[i]) {
        set.add(sum[i - 1]);
      }
    }

    for (let k = j + 2; k < nums.length - 1; k++) {
      if (sum[nums.length - 1] - sum[k] == sum[k - 1] - sum[j] && set.has(sum[k - 1] - sum[j])) {
        return true;
      }
    }
  }

  return false;
};

export { splitArray };
