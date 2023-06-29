

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestConsecutive = root => {
  const longestPath = root => {
    if (!root) {
      return [0, 0];
    }

    let inr = 1;
    let dcr = 1;

    if (root.left) {
      const l = longestPath(root.left);

      if (root.val === root.left.val + 1) {
        dcr = l[1] + 1;
      }
      if (root.val === root.left.val - 1) {
        inr = l[0] + 1;
      }
    }

    if (root.right) {
      const r = longestPath(root.right);

      if (root.val === root.right.val + 1) {
        dcr = Math.max(dcr, r[1] + 1);
      }
      if (root.val === root.right.val - 1) {
        inr = Math.max(inr, r[0] + 1);
      }
    }

    maxval = Math.max(maxval, dcr + inr - 1);

    return [inr, dcr];
  };

  let maxval = 0;
  longestPath(root);
  return maxval;
};

export default longestConsecutive;
