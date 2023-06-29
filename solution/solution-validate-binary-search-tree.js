

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = root => {
  if (!root) {
    return false;
  }

  const helper = (root, min, max) => {
    if (!root) {
      return true; // We hit the end of the path
    }

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false; // current node's val doesn't satisfy the BST rules
    }

    // Continue to scan left and right
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
  };

  return helper(root, null, null);
};

export default isValidBST;
