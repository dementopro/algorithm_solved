

import TreeNode from 'common/tree-node';

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
  if (!root) {
    return '';
  }

  const list = [];

  const helper = function(node) {
    if (!node) {
      return;
    }

    list.push(node.val);

    helper(node.left);
    helper(node.right);
  };

  helper(root);

  return list.join();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
  if (!data) {
    return null;
  }

  const preorder = data.split(',').map(item => parseInt(item, 10));
  const inorder = preorder.slice().sort((a, b) => a - b);

  return buildTree(preorder, inorder);
};

const buildTree = (preorder, inorder) => {
  const helper = (p1, p2, i1, i2) => {
    // sanity check
    if (p1 > p2 || i1 > i2) {
      return null;
    }

    const value = preorder[p1]; // get the root value
    const index = inorder.indexOf(value); // get inorder position
    const count = index - i1; // count nodes in left subtree
    const root = new TreeNode(value); // build the root node

    // build the left and right subtrees recursively
    root.left = helper(p1 + 1, p1 + count, i1, index - 1);
    root.right = helper(p1 + count + 1, p2, index + 1, i2);

    return root;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

export { serialize, deserialize };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
