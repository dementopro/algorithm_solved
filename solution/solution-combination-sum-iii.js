

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum = (k, n) => {
  const results = [];
  backtracking(k, n, 1, [], results);
  return results;
};

const backtracking = (k, n, start, solution, results) => {
  if (k < 0 || n < 0) {
    return;
  }

  if (k === 0 && n === 0) {
    results.push(solution.slice());
    return;
  }

  for (let i = start; i <= 9; i++) {
    solution.push(i);
    backtracking(k - 1, n - i, i + 1, solution, results);
    solution.pop();
  }
};

export default combinationSum;
