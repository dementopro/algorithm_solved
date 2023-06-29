

/**
 * Solution I
 *
 * @param {number[]} A
 * @return {number}
 */
/**
 * @param {number[]} A
 * @return {number}
 */
const longestMountain = A => {
  let ans = 0;

  // i is left boundary of the mountain
  // p is the index of the peak
  // j is the right boundary of the mountain
  for (let i = 0, j = 0, p = -1; j < A.length; j++) {
    if ((j === 0 || A[j] > A[j - 1]) && (j === A.length - 1 || A[j] > A[j + 1])) {
      // found a peak
      p = j;
    }

    if ((j === 0 || A[j] <= A[j - 1]) && (j === A.length - 1 || A[j] <= A[j + 1])) {
      // found a bottom
      if (p > 0) {
        // update the result
        ans = Math.max(ans, j - i + 1);
      }
      // reset the left boundary
      i = j;
      // reset the peak (going to search for a new peak)
      p = -1;
    }
  }

  return ans;
};

export { longestMountain };
