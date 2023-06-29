

/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.min = null;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.stack.length === 0) {
      this.stack.push(x);
      this.min = x;
      return;
    }

    if (x < this.min) {
      // x - this.min < 0
      // 2x - this.min < x
      // so 2x - this.min < new min
      this.stack.push(2 * x - this.min);
      this.min = x;
    } else {
      this.stack.push(x);
    }
  }

  /**
   * @return {number}
   */
  pop() {
    const x = this.stack.pop();

    if (x < this.min) {
      const result = this.min;
      this.min = 2 * this.min - x;
      return result;
    }

    if (this.stack.length === 0) {
      this.min = null;
    }

    return x;
  }

  /**
   * @return {number}
   */
  top() {
    const x = this.stack[this.stack.length - 1];

    if (x < this.min) {
      return this.min;
    }

    return x;
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
