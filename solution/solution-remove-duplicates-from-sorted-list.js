

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
const deleteDuplicates = head => {
  let slow = head;
  let fast = head;

  while (fast) {
    while (fast && fast.val === slow.val) {
      fast = fast.next;
    }
    slow.next = fast;
    slow = fast;
  }

  return head;
};

export { deleteDuplicates };
