

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = Object.create(MyCalendarThree).createNew()
 * var param_1 = obj.book(start,end)
 */

class MyCalendarThree {
  constructor() {
    this.timeline = {};
  }

  /**
   * @param {number} start
   * @param {number} end
   * @return {number}
   */
  book(start, end) {
    // 1 new event will be starting at [s]
    this.timeline[start] = ~~this.timeline[start] + 1;
    // 1 new event will be ending at [e];
    this.timeline[end] = ~~this.timeline[end] - 1;

    let ongoing = 0;
    let k = 0;

    // Here we make sure we go though the keys in order of key value
    for (let v of Object.values(this.timeline)) {
      k = Math.max(k, (ongoing += v));
    }

    return k;
  }
}

export { MyCalendarThree };
