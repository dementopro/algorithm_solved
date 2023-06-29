

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
 * @return {ListNode[]}
 */
const splitListToParts = (head, k) => {
  // Step 1. Get the total length of the linked list
  let len = 0;
  for (let node = head; node; node = node.next) {
    len++;
  }

  // Step 2. The spread technique
  const n = Math.floor(len / k);
  let r = len % k;

  // Step 3. Initialize the result and two pointers
  let result = Array(k).fill(null);
  let prev = null;
  let curr = head;

  // Step 4. Traverse the linked list
  for (let i = 0; curr && i < k; i++, r--) {
    result[i] = curr;

    // n + (r > 0 ? 1 : 0), the spread technique
    for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
      prev = curr;
      curr = curr.next;
    }

    // cut the list
    prev.next = null;
  }

  return result;
};

export { splitListToParts };
