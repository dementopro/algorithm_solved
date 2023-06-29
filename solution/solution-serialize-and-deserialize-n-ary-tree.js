

class Codec {
  /**
   * Encodes an n-ary tree to a binary tree.
   *
   * @param {Node} root
   * @return {TreeNode}
   */
  encode(root) {
    if (!root) {
      return null;
    }

    const result = new TreeNode(root.val);

    if (root.children.length > 0) {
      result.left = this.encode(root.children[0]);
    }

    let curr = result.left;

    for (let i = 1; i < root.children.length; i++) {
      curr.right = this.encode(root.children[i]);
      curr = curr.right;
    }

    return result;
  }

  /**
   * Decodes your binary tree to an n-ary tree.
   *
   * @param {TreeNode} root
   * @return {Node}
   */
  decode(root) {
    if (!root) {
      return null;
    }

    const result = new Node(root.val, []);

    let curr = root.left;

    while (curr) {
      result.children.push(this.decode(curr));
      curr = curr.right;
    }

    return result;
  }
}

export { Codec };
