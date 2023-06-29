

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Iterative Solution
 *
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST_I = root => {
  const stack = [];
  let curr = root;
  let prev = null;
  let min = Infinity;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();

      if (prev) {
        min = Math.min(min, Math.abs(curr.val - prev.val));
      }
      prev = curr;

      curr = curr.right;
    }
  }

  return min;
};

/**
 * Recursive Solution
 *
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST_II = root => {
  let prev = null;
  let min = Infinity;

  const inorder = curr => {
    if (!curr) {
      return;
    }

    inorder(curr.left);

    if (prev) {
      min = Math.min(min, Math.abs(curr.val - prev.val));
    }
    prev = curr;

    inorder(curr.right);
  };

  inorder(root);
  return min;
};

export { minDiffInBST_I, minDiffInBST_II };
