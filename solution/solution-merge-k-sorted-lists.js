

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

import PriorityQueue from 'common/priority-queue';

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {
  if (!lists || lists.length === 0) {
    return null;
  }

  const dummy = new ListNode(0);
  let p = dummy;

  const pq = new PriorityQueue({
    comparator: (a, b) => a.val - b.val,
  });

  // Initialize
  for (let list of lists) {
    pq.offer(list);
  }

  while (pq.size() > 0) {
    p.next = pq.poll();
    p = p.next;

    if (p.next) {
      pq.offer(p.next);
    }
  }

  return dummy.next;
};

export { mergeKLists };
