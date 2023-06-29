

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

import PriorityQueue from 'common/priority-queue';

class MedianFinder {
  /**
   * initialize your data structure here.
   */
  constructor() {
    // Max heap
    this.left = new PriorityQueue({ comparator: (a, b) => b - a });
    // Min heap
    this.right = new PriorityQueue({ comparator: (a, b) => a - b });
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    const m = this.findMedian();
    const diff = this.left.size() - this.right.size();

    // left and right are balanced
    if (diff === 0) {
      if (num < m) {
        this.left.offer(num);
      } else {
        this.right.offer(num);
      }
    }
    // left has more elements than right
    else if (diff > 0) {
      if (num < m) {
        if (this.left.size() > 0) {
          this.right.offer(this.left.poll());
        }
        this.left.offer(num);
      } else {
        this.right.offer(num);
      }
    }
    // right has more elements than left
    else {
      if (num < m) {
        this.left.offer(num);
      } else {
        if (this.right.size() > 0) {
          this.left.offer(this.right.poll());
        }
        this.right.offer(num);
      }
    }
  }

  /**
   * @return {number}
   */
  findMedian() {
    if (this.left.size() === 0 && this.right.size() === 0) {
      return 0;
    }

    const diff = this.left.size() - this.right.size();

    // left and right are balanced
    if (diff === 0) {
      return (this.left.peek() + this.right.peek()) / 2.0;
    }
    // left has more elements than right
    if (diff > 0) {
      return this.left.peek();
    }
    // right has more elements than left
    return this.right.peek();
  }
}

export { MedianFinder };
