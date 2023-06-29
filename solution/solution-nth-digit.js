

/**
 * Straight forward way to solve the problem in 3 steps:
 * 1. find the length of the number where the nth digit is from
 * 2. find the actual number where the nth digit is from
 * 3. find the nth digit and return
 *
 * @param {number} n
 * @return {number}
 */
const findNthDigit = n => {
  let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  start += Math.floor((n - 1) / len);

  const s = start + '';

  return parseInt(s[(n - 1) % len]);
};

export { findNthDigit };
