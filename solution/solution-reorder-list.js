

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = head => {
  if (!head || !head.next) {
    return;
  }

  // Step 1. Cut the original list into two halves
  let prev = null;
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null; // The cut

  // Step 2. Reverse the 2nd half
  const head2 = reverse(slow);

  // Step 3. merge the two halves
  return merge(head, head2);
};

const reverse = head => {
  if (!head || !head.next) {
    return head;
  }

  const next = head.next;
  head.next = null;

  const newHead = reverse(next);
  next.next = head;

  return newHead;
};

const merge = (l1, l2) => {
  while (l1) {
    const n1 = l1.next;
    const n2 = l2.next;

    l1.next = l2;

    if (!n1) break;

    l2.next = n1;
    l1 = n1;
    l2 = n2;
  }
};

export { reorderList };
