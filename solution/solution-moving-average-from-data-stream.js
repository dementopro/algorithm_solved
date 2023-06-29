

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = Object.create(MovingAverage).createNew(size)
 * var param_1 = obj.next(val)
 */

/**
 * Initialize your data structure here.
 * @param {number} size
 */
class MovingAverage {
  constructor(size) {
    this.window = Array(size).fill(0);
    this.ptr = 0;
    this.sum = 0;
    this.count = 0;
  }

  /**
   * @param {number} val
   * @return {number}
   */
  next(val) {
    if (this.count < this.window.length) {
      this.count++;
    }

    this.sum += val - this.window[this.ptr];
    this.window[this.ptr] = val;
    this.ptr = (this.ptr + 1) % this.window.length;

    return this.sum / this.count;
  }
}

export { MovingAverage };
