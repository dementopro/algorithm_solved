

/**
 * Solution I
 *
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree_I = n => {
  if (n < 1) {
    return false;
  }

  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }

  return n === 1;
};

/**
 * Solution II
 *
 * 1162261467 = 3^19
 *
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree_II = n => {
  return n > 0 && 1162261467 % n == 0;
};

export { isPowerOfThree_I, isPowerOfThree_II };
