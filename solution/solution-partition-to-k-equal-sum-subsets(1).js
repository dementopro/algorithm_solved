

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = (nums, k) => {
  // Step 1. If total sum cannot be divided by k or one of the number
  // is greater than sum/k, return false
  const sum = nums.reduce((total, num) => total + num);
  if (sum % k !== 0 || nums.some(num => num > sum / k)) {
    return false;
  }

  // Step 2. Use a hashset to track used numbers
  const used = new Set();

  // Step 3. Start the search
  return (function search(start, target) {
    // If all the numbers are used, we are done
    if (used.size === nums.length) {
      return true;
    }

    // The subset sum is too large, stop searching
    if (target < 0) {
      return false;
    }

    // If we have found one subset, continue the search till we use all the numbers
    if (target === 0) {
      return search(0, sum / k);
    }

    // Try every unused number
    for (let i = start; i < nums.length; i++) {
      if (!used.has(i)) {
        used.add(i);
        if (search(i + 1, target - nums[i])) {
          return true;
        }
        used.delete(i);
      }
    }

    return false;
  })(0, sum / k);
};

export { canPartitionKSubsets };
