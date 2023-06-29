

/**
 * @param {number[]} nums
 * @param {number} k
 * @return number
 */
const maxSumOfThreeSubarrays = (nums, k) => {
  const n = nums.length;

  // Calculate the accumulative sum from left
  const sumLeft = [...nums];
  for (let i = 1; i < n; i++) {
    sumLeft[i] += sumLeft[i - 1];
  }

  const sumRight = [...nums];
  for (let i = n - 2; i >= 0; i--) {
    sumRight[i] += sumRight[i + 1];
  }

  // Calculate the maxLeft[] where the i-th element indicates the max subarry array seen so far from left
  const maxLeft = Array(n).fill(0);
  for (let i = k - 1; i < n; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], sumLeft[i] - sumLeft[i - k + 1] + nums[i - k + 1]);
  }

  // Calculate the maxRight[] where the i-th element indicates the max subarry array seen so far from right
  const maxRight = Array(n).fill(0);
  for (let i = n - k; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], sumRight[i] - sumRight[i + k - 1] + nums[i + k - 1]);
  }

  // Move the central subarray (or window) and get the maximum sum from both left and right sides
  let sum = 0;

  for (let i = k; i <= n - 2 * k; i++) {
    const total = sumLeft[i + k - 1] - sumLeft[i] + nums[i] + maxLeft[i - 1] + maxRight[i + k];
    sum = Math.max(sum, total);
  }

  return sum;
};

export { maxSumOfThreeSubarrays };
