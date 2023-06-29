

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = root => {
  // first and second are the two nodes that are swapped by mistake
  let prev, first, second;

  const inorder = root => {
    if (!root) {
      return;
    }

    inorder(root.left);

    // Found a first mistake
    if (prev && prev.val > root.val) {
      if (!first) {
        first = prev; // Only set the "first" once
      }
      second = root; // Always update the "second"
    }

    prev = root;

    inorder(root.right);
  };

  inorder(root);

  // Swap the values of the two nodes
  let temp = first.val;
  first.val = second.val;
  second.val = temp;
};

export default recoverTree;
