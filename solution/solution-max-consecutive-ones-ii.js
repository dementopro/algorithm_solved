

/**
 * Solution I - Time: O(n) Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes_I = nums => {
  let max = 0;
  let zero = 0;
  let k = 1; // flip at most k zero

  for (let l = 0, h = 0; h < nums.length; h++) {
    if (nums[h] == 0) {
      zero++;
    }

    while (zero > k) {
      if (nums[l++] == 0) {
        zero--;
      }
    }

    max = Math.max(max, h - l + 1);
  }

  return max;
};

/**
 * Follow up - Time: O(n) Space: O(k)
 *
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes_II = nums => {
  let max = 0;
  let k = 1; // flip at most k zero
  let zero = [];

  for (let l = 0, h = 0; h < nums.length; h++) {
    if (nums[h] === 0) {
      zero.push(h);
    }

    if (zero.length > k) {
      l = zero.shift() + 1;
    }

    max = Math.max(max, h - l + 1);
  }

  return max;
};

export { findMaxConsecutiveOnes_I, findMaxConsecutiveOnes_II };
