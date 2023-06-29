

/**
 * @param {number[][]} costs
 * @return {number}
 */
const minCost = costs => {
  if (!costs || costs.length === 0) {
    return 0;
  }

  const n = costs.length; // n houses

  // costs[i]]j] represents the minimum cost of painting house i with color j
  for (let i = 1; i < n; i++) {
    costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
    costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
    costs[i][2] += Math.min(costs[i - 1][1], costs[i - 1][0]);
  }

  return Math.min(Math.min(costs[n - 1][0], costs[n - 1][1]), costs[n - 1][2]);
};

export { minCost };
