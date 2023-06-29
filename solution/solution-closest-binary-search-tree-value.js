

/**
 * Iterative
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = (root, target) => {
  let closest = root.val;

  while (root) {
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
      closest = root.val;
    }

    if (root.val === target) {
      break;
    }

    root = target > root.val ? root.right : root.left;
  }

  return closest;
};

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValueR = (root, target) => {
  const child = target < root.val ? root.left : root.right;

  if (!child) {
    return root.val;
  }

  const closest = closestValueR(child, target);

  return Math.abs(target - closest) < Math.abs(target - root.val) ? closest : root.val;
};

export { closestValue, closestValueR };
