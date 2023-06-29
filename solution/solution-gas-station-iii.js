

/**
 * @param {number} totalDistance
 * @param {number} mpg
 * @param {number} tank
 * @param {number[]} distances
 * @param {number[]} prices
 * @return {number}
 */
const minCost = (totalDistance, mpg, tank, distances, prices) => {
  const n = distances.length;
  const dp = Array(n + 2).fill(0);

  distances = [0, ...distances, totalDistance];
  prices = [0, ...prices, 0];

  for (let i = 1; i < n + 2; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < i; j++) {
      if (distances[i] - distances[j] <= mpg * tank) {
        dp[i] = Math.min(dp[i], dp[j] + prices[i] * (distances[i] - distances[j]));
      }
    }
  }

  return dp[n + 1] < Number.MAX_SAFE_INTEGER ? dp[n + 1] : -1;
};

export { minCost };
