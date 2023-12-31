

/**
 * Recursive Solution
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumOfAverages_I = (A, K) => {
  // Get the accumulative sum
  const sum = Array(A.length);
  for (let i = 0; i < A.length; i++) {
    sum[i] = A[i] + (i > 0 ? sum[i - 1] : 0);
  }

  // Recursion
  return helper(A, K, sum, A.length);
};

const helper = (A, k, sum, n) => {
  if (n <= 0) {
    return 0;
  }

  if (k === 1) {
    return (sum[n - 1] - sum[0] + A[0]) / n;
  }

  let result = 0;
  for (let i = k - 1; i < n; i++) {
    result = Math.max(result, (sum[n - 1] - sum[i] + A[i]) / (n - i) + helper(A, k - 1, sum, i));
  }
  return result;
};

/**
 * Dynamic Programming Solution
 *
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumOfAverages_II = (A, K) => {
  const n = A.length;

  // Get the accumulative sum
  const sum = Array(n);
  for (let i = 0; i < n; i++) {
    sum[i] = A[i] + (i > 0 ? sum[i - 1] : 0);
  }

  const dp = Array(n + 1)
    .fill()
    .map(() => Array(K + 1).fill(0));

  // Initialize
  for (let i = 1; i <= n; i++) {
    dp[i][1] = (sum[i - 1] - sum[0] + A[0]) / i;
  }

  for (let k = 2; k <= K; k++) {
    for (let i = k; i <= n; i++) {
      for (let j = k - 1; j <= i - 1; j++) {
        dp[i][k] = Math.max(dp[i][k], (sum[i - 1] - sum[j - 1]) / (i - j) + dp[j][k - 1]);
      }
    }
  }

  return dp[n][K];
};

const A = [9, 1, 2, 3, 9];
const K = 3;
console.log(largestSumOfAverages_I(A, K));
