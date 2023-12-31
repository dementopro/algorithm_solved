

/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = num => {
  const digits = num.toString().split('');

  // Use buckets to record the last position of digit 0 ~ 9 in this num.
  const buckets = Array(10).fill(-1);
  for (let i = 0; i < digits.length; i++) {
    buckets[digits[i] - '0'] = i;
  }

  // Loop through the num array from left to right. For each position,
  // we check whether there exists a larger digit in this num (start from 9 to current digit).
  // We also need to make sure the position of this larger digit is behind the current one.
  // If we find it, simply swap these two digits and return the result.
  for (let i = 0; i < digits.length; i++) {
    for (let k = 9; k > digits[i] - '0'; k--) {
      if (buckets[k] > i) {
        [digits[i], digits[buckets[k]]] = [digits[buckets[k]], digits[i]];
        return parseInt(digits.join(''));
      }
    }
  }

  return num;
};

export { maximumSwap };
