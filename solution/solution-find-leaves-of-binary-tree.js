

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const findLeaves = root => {
  const result = [];

  const getHeight = node => {
    if (!node) {
      return -1;
    }

    const height = 1 + Math.max(getHeight(node.left), getHeight(node.right));

    if (!result[height]) {
      result[height] = [];
    }

    result[height].push(node.val);

    return height;
  };

  getHeight(root);

  return result;
};

export { findLeaves };
