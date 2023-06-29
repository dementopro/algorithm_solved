

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const upsideDownBinaryTree = root => {
  if (!root || (!root.left && !root.right)) {
    return root;
  }

  const newRoot = upsideDownBinaryTree(root.left);

  root.left.left = root.right;
  root.left.right = root;

  root.left = null;
  root.right = null;

  return newRoot;
};

export default upsideDownBinaryTree;
