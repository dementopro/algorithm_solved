

import TreeNode from 'common/tree-node';

/**
 * DFS Solution
 *
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRowDFS = (root, v, d) => {
  const helper = (root, level, v, d) => {
    if (!root) {
      return;
    }

    if (level < d - 1) {
      helper(root.left, level + 1, v, d);
      helper(root.right, level + 1, v, d);
    } else {
      // Handle the left subtree
      const left = root.left;
      root.left = new TreeNode(v);
      root.left.left = left;

      // Handle the right subtree
      const right = root.right;
      root.right = new TreeNode(v);
      root.right.right = right;
    }
  };

  if (d === 1) {
    const newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  }

  helper(root, 1, v, d);

  return root;
};

/**
 * BFS Solution
 *
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRowBFS = (root, v, d) => {
  if (d === 1) {
    const newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  }

  const queue = [root];

  for (let k = 1; k <= d - 2; k++) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();

    // Handle the left subtree
    const left = node.left;
    node.left = new TreeNode(v);
    node.left.left = left;

    // Handle the right subtree
    const right = node.right;
    node.right = new TreeNode(v);
    node.right.right = right;
  }

  return root;
};

export { addOneRowDFS, addOneRowBFS };
