

/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = num => {
  // 0x55555555 is to get rid of those power of 2 but not power of 4
  // so that the single 1 bit always appears at the odd position
  return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0;
};

/**
 * Solution I: Using loops
 *
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour_I = num => {
  if (num > 1) {
    while (num % 4 === 0) {
      num /= 4;
    }
  }

  return num === 1;
};

export { isPowerOfFour, isPowerOfFour_I };
