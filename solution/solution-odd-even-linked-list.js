

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
const oddEvenList = head => {
  if (!head) {
    return null;
  }

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even && even.next) {
    odd = odd.next.next;
    even = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

export { oddEvenList };
