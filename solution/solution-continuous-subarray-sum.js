

/**
 * Solution I: Cumulative Sum
 * Time Complexity: O(n^2)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum_I = (nums, k) => {
  // step 1. store the cumulative sum in sum[]
  const sum = [...nums];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }

  // step 2. check the sum from nums[i] to nums[j]
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const total = sum[j] - sum[i] + nums[i];

      if (total === k || (k !== 0 && total % k === 0)) {
        return true;
      }
    }
  }

  return false;
};

/**
 * Solution II: Utilize remaining (res + n * k)
 * Time Complexity: O(n)
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = (nums, k) => {
  const map = new Map([[0, -1]]);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (k !== 0) {
      sum = sum % k;
    }

    if (map.has(sum)) {
      if (i - map.get(sum) >= 2) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};

export { checkSubarraySum, checkSubarraySum_I };
