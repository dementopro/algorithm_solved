

class MaxStack {
  /**
   * initialize your data structure here.
   */
  constructor() {
    this.numStack = [];
    this.maxStack = [];
  }

  pushHelper(x) {
    let max = this.maxStack.length > 0 ? this.maxStack[this.maxStack.length - 1] : -Infinity;
    if (x > max) {
      max = x;
    }
    this.numStack.push(x);
    this.maxStack.push(max);
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.pushHelper(x);
  }

  /**
   * @return {number}
   */
  pop() {
    this.maxStack.pop();
    return this.numStack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.numStack[this.numStack.length - 1];
  }

  /**
   * @return {number}
   */
  peekMax() {
    return this.maxStack[this.maxStack.length - 1];
  }

  /**
   * @return {number}
   */
  popMax() {
    const max = this.peekMax();
    const temp = [];

    while (this.numStack[this.numStack.length - 1] !== max) {
      temp.push(this.numStack.pop());
      this.maxStack.pop();
    }

    this.numStack.pop();
    this.maxStack.pop();

    while (temp.length > 0) {
      this.pushHelper(temp.pop());
    }

    return max;
  }
}

export { MaxStack };
