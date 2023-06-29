

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
const kEmptySlots = (flowers, k) => {
  const n = flowers.length;
  const window = [];
  const days = [];

  for (let i = 0; i < n; i++) {
    days[flowers[i] - 1] = i + 1;
  }

  let result = n;

  for (let i = 0; i < n; i++) {
    // Step 1. Remove the old item from window
    if (window.length > 0 && window[0] === i - k) {
      window.shift();
    }

    // Step 2. Try to pop the larger/smaller items
    while (window.length > 0 && days[i] < days[window[window.length - 1]]) {
      window.pop();
    }

    // Step 3. Push the new item, now window[0] holds the smallest/largest item
    window.push(i);

    // Step 4. Check the minimum day in the window with the left and right borders
    if (i < k || i === n - 1) {
      continue;
    }

    if (k === 0 || (days[i - k] < days[window[0]] && days[i + 1] < days[window[0]])) {
      result = Math.min(result, Math.max(days[i - k], days[i + 1]));
    }
  }

  return result < n ? result : -1;
};

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 */
const kEmptySlotsII = (flowers, k) => {
  const n = flowers.length;
  const window = new MinQueue();
  const days = [];

  for (let i = 0; i < n; i++) {
    days[flowers[i] - 1] = i + 1;
  }

  let result = n;

  for (let i = 0; i < n; i++) {
    window.push(days[i]);

    if (k <= i && i < n - 1) {
      window.shift();

      if (k == 0 || (days[i - k] < window.min() && days[i + 1] < window.min())) {
        result = Math.min(result, Math.max(days[i - k], days[i + 1]));
      }
    }
  }

  return result < n ? result : -1;
};

class MinQueue extends Array {
  constructor() {
    super();
    this.mins = [];
  }

  push(x) {
    super.push(x);

    while (this.mins.length > 0 && x < this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }

    this.mins.push(x);
  }

  shift() {
    const x = super.shift();

    if (x == this.mins[0]) {
      this.mins.shift();
    }

    return x;
  }

  min() {
    return this.mins[0];
  }
}

export { kEmptySlots, kEmptySlotsII };
