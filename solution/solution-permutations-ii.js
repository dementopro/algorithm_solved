

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = nums => {
  const results = [];
  nums.sort((a, b) => a - b);
  backtracking(nums, {}, [], results);
  return results;
};

const backtracking = (nums, used, solution, results) => {
  if (solution.length === nums.length) {
    results.push(solution.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
      continue;
    }

    solution.push(nums[i]);
    used[i] = true;
    backtracking(nums, used, solution, results);
    solution.pop();
    used[i] = false;
  }
};

export default permuteUnique;
