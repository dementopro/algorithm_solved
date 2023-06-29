

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = head => {
  if (!head) {
    return null;
  }

  if (!head.next) {
    return new TreeNode(head.val);
  }

  // Find the previous node of middle node
  const node = findMiddle(head);
  const middle = node.next;
  node.next = null;

  const root = new TreeNode(middle.val);

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(middle.next);

  return root;
};

const findMiddle = head => {
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return prev;
};

export { sortedListToBST };
