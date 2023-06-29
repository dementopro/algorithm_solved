

/**
 * For each bit position 1-32 in a 32-bit integer, we count the number of integers
 * in the array which have that bit set. Then, if there are n integers in the array
 * and k of them have a particular bit set and (n-k) do not, then that bit contributes
 * k*(n-k) hamming distance to the total.
 *
 * @param {number[]} nums
 * @return {number}
 */
const totalHammingDistance = nums => {
  let total = 0;
  const n = nums.length;

  for (let j = 0; j < 32; j++) {
    let bitCount = 0;

    for (let i = 0; i < n; i++) {
      bitCount += (nums[i] >>> j) & 1;
    }

    total += bitCount * (n - bitCount);
  }

  return total;
};

export { totalHammingDistance };
