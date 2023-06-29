

class Solution {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * @param {number} target
   * @return {number}
   */
  pick(target) {
    let count = 0;
    let res = null;

    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) {
        count++;
        if (randomInt(0, count) === count - 1) {
          res = i;
        }
      }
    }

    return res;
  }
}

export { Solution };
