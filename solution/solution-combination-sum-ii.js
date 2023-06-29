

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  const results = [];
  candidates.sort((a, b) => a - b);
  backtracking(candidates, target, 0, [], results);
  return results;
};

const backtracking = (candidates, target, start, solution, results) => {
  if (target < 0) {
    return;
  }

  if (target === 0) {
    results.push(solution.slice());
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) {
      continue;
    }
    solution.push(candidates[i]);
    backtracking(candidates, target - candidates[i], i + 1, solution, results);
    solution.pop();
  }
};

export default combinationSum;
