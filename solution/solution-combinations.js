

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const results = [];
  backtracking(n, k, 1, [], results);
  return results;
};

const backtracking = (n, k, start, solution, results) => {
  if (solution.length === k) {
    return results.push(solution.slice());
  }

  for (let i = start; i <= n; i++) {
    solution.push(i);
    backtracking(n, k, i + 1, solution, results);
    solution.pop();
  }
};

export default combine;
