

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
  // Do not reverse if the number of nodes is less than k
  if (getLength(head) < k) {
    return head;
  }

  // perform reverse
  let prev = null;
  let curr = head;
  let count = k;

  while (curr && count-- > 0) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // prev is the new head
  // head is the new tail
  // curr is the next list

  head.next = reverseKGroup(curr, k);

  return prev;
};

const getLength = head => {
  let count = 0;
  let p = head;

  while (p) {
    p = p.next;
    count++;
  }

  return count;
};

export { reverseKGroup };
