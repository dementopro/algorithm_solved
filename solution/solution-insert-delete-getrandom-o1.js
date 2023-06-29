

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  constructor() {
    // Stores vals
    this.nums = [];
    // Track val's location in nums array
    this.locs = new Map();
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.locs.has(val)) {
      return false;
    }

    this.locs.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.locs.has(val)) {
      return false;
    }

    const loc = this.locs.get(val);

    // The key is to swap the location of val with the last val
    if (loc !== this.nums.length - 1) {
      const lastVal = this.nums[this.nums.length - 1];
      this.nums[loc] = lastVal; // swap in nums
      this.locs.set(lastVal, loc); // swap in locs
    }

    this.locs.delete(val);
    this.nums.pop();
    return true;
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}

export { RandomizedSet };
