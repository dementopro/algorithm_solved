

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Recursion
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElementsR = (head, val) => {
  if (!head) {
    return null;
  }

  head.next = removeElementsR(head.next, val);

  return head.val === val ? head.next : head;
};

/**
 * Non-Recursion
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = (head, val) => {
  const dummy = new ListNode(0);
  let p = dummy;

  let node = head;
  while (node) {
    if (node.val !== val) {
      p.next = node;
      p = p.next;
    }
    node = node.next;
  }

  p.next = null;

  return dummy.next;
};

export { removeElements, removeElementsR };
