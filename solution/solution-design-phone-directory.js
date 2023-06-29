

class PhoneDirectory {
  /**
   * Initialize your data structure here
          @param maxNumbers - The maximum numbers that can be stored in the phone directory.
   * @param {number} maxNumbers
   */
  constructor(maxNumbers) {
    this.pos = 0;
    this.nums = [];
    for (let i = 0; i < maxNumbers; i++) {
      this.nums[i] = (i + 1) % maxNumbers;
    }
  }

  /**
   * Provide a number which is not assigned to anyone.
          @return - Return an available number. Return -1 if none is available.
   * @return {number}
   */
  get() {
    if (this.nums[this.pos] === -1) {
      return -1;
    }

    const res = this.pos;
    this.pos = this.nums[res];
    this.nums[res] = -1;
    return res;
  }

  /**
   * Check if a number is available or not.
   * @param {number} number
   * @return {boolean}
   */
  check(number) {
    return this.nums[number] !== -1;
  }

  /**
   * Recycle or release a number.
   * @param {number} number
   * @return {void}
   */
  release(number) {
    if (this.nums[number] !== -1) {
      return;
    }
    this.nums[number] = this.pos;
    this.pos = number;
  }
}

export { PhoneDirectory };
