

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  const inorder = node => {
    if (node) {
      inorder(node.left);

      if (++count === k) {
        result = node.val;
        return;
      }

      inorder(node.right);
    }
  };

  let count = 0;
  let result = 0;

  inorder(root);

  return result;
};
