

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this.curr = root;
  }

  /**
   * @this BSTIterator
   * @returns {boolean} - whether we have a next smallest number
   */
  hasNext() {
    return this.curr || this.stack.length > 0;
  }

  /**
   * @this BSTIterator
   * @returns {number} - the next smallest number
   */
  next() {
    while (this.curr) {
      this.stack.push(this.curr);
      this.curr = this.curr.left;
    }

    var node = this.stack.pop();
    this.curr = node.right;
    return node.val;
  }
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

export { BSTIterator };
