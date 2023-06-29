

/**
 * Initialize your data structure here.
 */
class HitCounter {
  constructor() {
    this.times = Array(300);
    this.hits = Array(300);
  }

  /**
   * Record a hit.
   * @param timestamp - The current timestamp (in seconds granularity).
   * @param {number} timestamp
   * @return {void}
   */
  hit(timestamp) {
    const index = timestamp % 300;

    if (this.times[index] !== timestamp) {
      this.times[index] = timestamp;
      this.hits[index] = 1;
    } else {
      this.hits[index]++;
    }
  }

  /**
   * Return the number of hits in the past 5 minutes.
   * @param timestamp - The current timestamp (in seconds granularity).
   * @param {number} timestamp
   * @return {number}
   */
  getHits(timestamp) {
    let total = 0;

    for (let i = 0; i < 300; i++) {
      if (timestamp - this.times[i] < 300) {
        total += this.hits[i];
      }
    }

    return total;
  }
}

export { HitCounter };
