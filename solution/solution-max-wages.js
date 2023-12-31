

/**
 * @param {number[][]} jobs
 * @returns number
 */
const maxWages = jobs => {
  if (!jobs || jobs.length === 0) {
    return 0;
  }

  // Sort the jobs by the end time
  jobs.sort((a, b) => a[1] - b[1]);

  const n = jobs.length;
  const dp = Array(n).fill(0);

  // Initialize the dp
  dp[0] = jobs[0][2];

  for (let i = 1; i < n; i++) {
    // Case 1. Do not take the current job
    const wage1 = dp[i - 1];

    // Case 2. Take the current job
    let wage2 = jobs[i][2];
    // Add up the max wage from finishing previous jobs
    // make sure the jobs are not conflict
    for (let j = i - 1; j >= 0; j--) {
      if (jobs[j][1] <= jobs[i][0]) {
        wage2 += dp[j];
        break;
      }
    }

    dp[i] = Math.max(wage1, wage2);
  }

  return dp[n - 1];
};

export { maxWages };
