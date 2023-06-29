

/**
 * Initialize your data structure here.
 */
class Logger {
  constructor() {
    this.map = new Map();
  }
  /**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity.
* @param {number} timestamp
* @param {string} message
* @return {boolean}
*/
  shouldPrintMessage(timestamp, message) {
    if (this.map.has(message)) {
      const lastTimestamp = this.map.get(message);
      if (timestamp - lastTimestamp >= 10) {
        this.map.set(message, timestamp);
        return true;
      } else {
        return false;
      }
    } else {
      this.map.set(message, timestamp);
      return true;
    }
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = Object.create(Logger).createNew()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */

export { Logger };
