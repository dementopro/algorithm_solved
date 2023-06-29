

class Solution {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.nums = nums;
  }

  /**
   * Resets the array to its original configuration and return it.
   * @return {number[]}
   */
  reset() {
    return this.nums;
  }

  /**
   * Returns a random shuffling of the array.
   * @return {number[]}
   */
  shuffle() {
    const rand = this.nums.slice(0);

    for (let i = 0; i < this.nums.length; i++) {
      const r = Math.floor(Math.random() * (i + 1));
      rand[i] = rand[r];
      rand[r] = this.nums[i];
    }

    return rand;
  }
}

export { Solution };
