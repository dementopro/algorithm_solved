

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} k
 */
const kthAncestor = (root, val, k) => {
  const helper = (root, val, k) => {
    if (!root) {
      return -1;
    }

    if (root.val === val) {
      return 0;
    }

    const l = helper(root.left, val, k);
    const r = helper(root.right, val, k);

    if (l >= 0 || r >= 0) {
      if (l + 1 === k || r + 1 === k) {
        result = root.val;
      }
      return l >= 0 ? l + 1 : r + 1;
    }

    return -1;
  };

  let result = -1;
  helper(root, val, k);
  return result;
};

export { kthAncestor };
