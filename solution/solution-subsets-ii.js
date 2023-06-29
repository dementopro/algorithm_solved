

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = nums => {
  const results = [];
  nums.sort((a, b) => a - b);
  backtracking(nums, 0, [], results);
  return results;
};

const backtracking = (nums, start, solution, results) => {
  results.push(solution.slice());

  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) {
      continue; // avoid duplicates
    }

    solution.push(nums[i]);
    backtracking(nums, i + 1, solution, results);
    solution.pop();
  }
};

export default subsetsWithDup;
