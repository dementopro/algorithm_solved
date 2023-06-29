

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestConsecutive = root => {
  /**
   * Return the max length so far on either side
   * and compare the max
   *
   * @param {TreeNode} root
   */
  const helper = root => {
    if (!root) {
      return 0;
    }

    let len = 1;
    const left = helper(root.left);
    const right = helper(root.right);

    if (root.left && root.val === root.left.val - 1) {
      len = Math.max(len, 1 + left);
    }

    if (root.right && root.val === root.right.val - 1) {
      len = Math.max(len, 1 + right);
    }

    max = Math.max(max, len);

    return len;
  };

  let max = 0;
  helper(root);
  return max;
};

export default longestConsecutive;
