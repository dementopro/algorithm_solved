

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (!nums) {
    return;
  }

  let i = 0;
  let j = 0;
  let k = nums.length - 1;

  while (j < k) {
    if (nums[j] == 1) {
      j++;
    } else if (nums[j] == 0) {
      swap(nums, i++, j++);
    } else {
      swap(nums, k--, j);
    }
  }
};

const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};

export { sortColors };
