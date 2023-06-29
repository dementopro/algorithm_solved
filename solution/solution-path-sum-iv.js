

/**
 * @param {number[]} nums
 * @return {number}
 */
const pathSum = nums => {
  const helper = (node, sum) => {
    if (!tree.has(node)) {
      return;
    }

    const level = int(node / 10);
    const pos = node % 10;
    const left = (level + 1) * 10 + pos * 2 - 1;
    const right = (level + 1) * 10 + pos * 2;

    const curSum = sum + tree.get(node);

    if (!tree.has(left) && !tree.has(right)) {
      total += curSum;
      return;
    }

    helper(left, curSum);
    helper(right, curSum);
  };

  if (!nums || nums.length === 0) {
    return 0;
  }

  let total = 0;
  const tree = new Map();

  nums.forEach(num => {
    const key = int(num / 10);
    const value = num % 10;
    tree.set(key, value);
  });

  const root = int(nums[0] / 10);
  helper(root, 0);
  return total;
};

const int = number => {
  return parseInt(number, 10);
};

export default pathSum;
