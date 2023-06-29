

/**
 * Recursion
 *
 * @param {number[]} p
 * @return {number}
 */
const matrixChainOrderR = p => {
  return helper(p, 1, p.length - 1);
};

const helper = (p, i, j) => {
  if (i === j) {
    return 0;
  }

  let min = Number.MAX_SAFE_INTEGER;

  // [1, 2, 3, 4]
  //     i  k  j
  // (1, 2) * (2, 3) * (3, 4)

  for (let k = i; k < j; k++) {
    const count = helper(p, i, k) + p[i - 1] * p[k] * p[j] + helper(p, k + 1, j);
    min = Math.min(min, count);
  }

  return min;
};

/**
 * Dynamic Programming
 *
 * @param {number[]} p
 * @return {number}
 */
const matrixChainOrder = p => {
  const n = p.length;
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  // dp[i,j] = Minimum number of scalar multiplications needed
  // to compute the matrix A[i]A[i+1]...A[j] = A[i..j] where
  // dimension of A[i] is p[i-1] x p[i]

  for (let len = 2; len < n; len++) {
    for (let i = 1; i + len - 1 <= n - 1; i++) {
      const j = i + len - 1;

      dp[i][j] = Number.MAX_SAFE_INTEGER;

      for (let k = i; k < j; k++) {
        const count = dp[i][k] + p[i - 1] * p[k] * p[j] + dp[k + 1][j];
        dp[i][j] = Math.min(dp[i][j], count);
      }
    }
  }

  return dp[1][n - 1];
};

export { matrixChainOrderR, matrixChainOrder };
