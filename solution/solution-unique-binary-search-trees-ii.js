

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import TreeNode from '../common/tree-node';

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = n => {
  if (n <= 0) {
    return [];
  }

  const helper = (lo, hi) => {
    if (lo > hi) {
      return [null];
    }

    if (lo === hi) {
      return [new TreeNode(lo)];
    }

    const res = [];

    for (let k = lo; k <= hi; k++) {
      const leftBSTs = helper(lo, k - 1);
      const rightBSTs = helper(k + 1, hi);

      for (let i = 0; i < leftBSTs.length; i++) {
        for (let j = 0; j < rightBSTs.length; j++) {
          const treeNode = new TreeNode(k);
          treeNode.left = leftBSTs[i];
          treeNode.right = rightBSTs[j];
          res.push(treeNode);
        }
      }
    }

    return res;
  };

  return helper(1, n);
};

export default generateTrees;
