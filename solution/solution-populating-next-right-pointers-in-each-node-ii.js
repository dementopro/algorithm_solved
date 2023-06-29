

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = root => {
  const getNext = root => {
    while (root) {
      if (root.left) {
        return root.left;
      }
      if (root.right) {
        return root.right;
      }
      root = root.next;
    }
    return null;
  };

  if (!root) return;

  while (root) {
    let current = root;

    while (current) {
      const { left, right, next } = current;

      if (left) {
        left.next = right ? right : getNext(next);
      }
      if (right) {
        right.next = getNext(next);
      }

      current = next;
    }

    root = getNext(root);
  }
};

export default connect;
