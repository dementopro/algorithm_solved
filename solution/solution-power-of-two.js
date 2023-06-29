

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_I = n => {
  if (n < 1) {
    return false;
  }

  while (n % 2 === 0) {
    n = Math.floor(n / 2);
  }

  return n === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_II = n => n > 0 && (n & (n - 1)) === 0;

export { isPowerOfTwo_I, isPowerOfTwo_II };
