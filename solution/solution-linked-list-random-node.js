

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class Solution {
  /**
   * @param head The linked list's head. Note that the head is guaranteed to be not null, so it contains at least one node.
   * @param {ListNode} head
   */
  constructor(head) {
    this.head = head;
  }

  /**
   * Returns a random node's value.
   * @return {number}
   */
  getRandom() {
    let res = null;
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      if (random(0, count) === count - 1) {
        res = node.val;
      }
      node = node.next;
    }

    return res;
  }
}

export { Solution };
