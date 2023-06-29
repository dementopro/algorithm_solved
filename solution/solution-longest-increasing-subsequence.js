

export default class Solution {
  /**
   * lis() returns the length of the longest increasing subsequence
   * in arr[] of size n
   * @param {number[]} arr
   * @returns {number}
   */
  lis(arr) {
    const n = arr.length;
    const res = [];
    let max = 0;

    // Compute optimized LIS values in bottom up manner
    for (let i = 0; i < n; i++) {
      res[i] = 1;

      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && res[i] < res[j] + 1) {
          res[i] = res[j] + 1;
        }
      }

      max = Math.max(max, res[i]);
    }

    return max;
  }
}
