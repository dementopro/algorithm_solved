

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const insertionSortList = head => {
  let curr = head;
  let next = null;

  // dummy is a fake head
  const dummy = new ListNode(0);

  while (curr) {
    next = curr.next;

    let p = dummy;
    while (p.next && p.next.val < curr.val) {
      p = p.next;
    }

    // insert curr between p and p.next
    curr.next = p.next;
    p.next = curr;
    curr = next;
  }

  return dummy.next;
};

export { insertionSortList };
