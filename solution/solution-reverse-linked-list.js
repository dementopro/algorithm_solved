

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
 * @return {ListNode}
 */
const reverseListR = head => {
  if (!head || !head.next) {
    return head;
  }

  const next = head.next;
  const newHead = reverseListR(next);

  head.next = null;
  next.next = head;

  return newHead;
};

/**
 * Non-Recursion
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

export { reverseList, reverseListR };
