

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSumR = (root, sum) => {
  if (!root) {
    return 0;
  }
  return pathSumFrom(root, sum) + pathSumR(root.left, sum) + pathSumR(root.right, sum);
};

const pathSumFrom = (node, sum) => {
  if (!node) {
    return 0;
  }

  return (node.val === sum ? 1 : 0) + pathSumFrom(node.left, sum - node.val) + pathSumFrom(node.right, sum - node.val);
};

/**
 * Prefix Sum
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = (root, sum) => {
  const helper = (root, current, sum, prefixSum) => {
    if (!root) {
      return 0;
    }

    current += root.val;

    var count = ~~prefixSum[current - sum];

    prefixSum[current] = ~~prefixSum[current] + 1;
    count += helper(root.left, current, sum, prefixSum) + helper(root.right, current, sum, prefixSum);
    prefixSum[current]--;

    return count;
  };

  return helper(root, 0, sum, { 0: 1 });
};

export { pathSumR, pathSum };
