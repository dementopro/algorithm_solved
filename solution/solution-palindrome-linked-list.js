

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = head => {
  if (!head || !head.next) {
    return true;
  }

  // Step 1. cut the original list to two halves
  let prev = null,
    slow = head,
    fast = head,
    l1 = head;

  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prev.next = null;

  // Step 2. reverse the 2nd half
  let l2 = fast ? reverse(slow.next) : reverse(slow);

  // Step 3. compare the new two halves
  while (l1 && l2) {
    if (l1.val !== l2.val) {
      return false;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  return true;
};

// Helper function: reverse a list
const reverse = head => {
  let prev = null,
    curr = head,
    next = null;

  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

export { isPalindrome };
