

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxSubArrayLen = (nums, k) => {
  const map = { 0: -1 };

  let len = 0;

  for (let i = 0, sum = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum - k in map) {
      len = Math.max(len, i - map[sum - k]);
    }

    if (!(sum in map)) {
      map[sum] = i;
    }
  }

  return len;
};

export { maxSubArrayLen };
