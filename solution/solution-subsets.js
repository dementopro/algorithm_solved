

/**
 * Backtracking solution
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_backtracking = nums => {
  const results = [];
  backtracking(nums, 0, [], results);
  return results;
};

/**
 * @param {number[]} nums
 * @param {number} start
 * @param {number[]} solution
 * @param {number[][]} results
 */
const backtracking = (nums, start, solution, results) => {
  results.push(solution.slice());

  for (let i = start; i < nums.length; i++) {
    solution.push(nums[i]);
    backtracking(nums, i + 1, solution, results);
    solution.pop();
  }
};

/**
 * Iterative Solution
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_iterative = nums => {
  let results = [[]];

  nums.forEach(num => {
    const newSubsets = results.map(subset => {
      return subset.concat([num]);
    });
    results = results.concat(newSubsets);
  });

  return results;
};

export { subsets_backtracking, subsets_iterative };
