

/**
 * Preorder
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const preorder = root => {
  const helper = current => {
    if (!current) {
      return;
    }

    if (last) {
      last.left = null;
      last.right = current;
    }

    last = current;

    const left = current.left;
    const right = current.right;

    helper(left);
    helper(right);
  };

  let last = null;
  helper(root);
};

/**
 * Postorder
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  const helper = root => {
    if (!root) {
      return;
    }

    helper(root.right);
    helper(root.left);

    root.left = null;
    root.right = last;

    last = root;
  };

  let last = null;
  helper(root);
};

export { flatten, preorder };
