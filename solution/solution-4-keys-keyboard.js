

/**
 * Recursion
 *
 * @param {number} N
 * @return {number}
 */
const maxA = N => {
  let result = N;
  for (let i = 1; i < N - 2; i++) {
    result = Math.max(result, maxA(i) * (N - i - 1));
  }
  return result;
};

/**
 * Dynamic Programming
 *
 * @param {number} N
 * @return {number}
 */
const maxA_II = N => {
  const dp = Array(N + 1).fill(0);

  for (let n = 1; n <= N; n++) {
    dp[n] = dp[n - 1] + 1;

    for (let i = 1; i < n - 2; i++) {
      dp[n] = Math.max(dp[n], dp[i] * (n - i - 1));
    }
  }

  return dp[N];
};

export { maxA, maxA_II };
