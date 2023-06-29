

/**
 * Definition for singly-linked list.
 * function ListNode(val, next = null) {
 *     this.val = val;
 *     this.next = next;
 * }
 */

import ListNode from 'common/list-node';

/**
 * @param {ListNode} start
 * @param {number} x
 */
const insert = (start, x) => {
  // if start is null, create a node pointing to itself and return
  if (start === null) {
    const node = new ListNode(x, null);
    node.next = node;
    return node;
  }

  // is start is NOT null, try to insert it into correct position
  let cur = start;
  while (true) {
    // case 1A: has a tipping point, still climbing
    if (cur.val < cur.next.val) {
      if (cur.val <= x && x <= cur.next.val) {
        // x in between cur and next
        insertAfter(cur, x);
        break;
      }
      // case 1B: has a tipping point, about to return back to min node
    } else if (cur.val > cur.next.val) {
      if (cur.val <= x || x <= cur.next.val) {
        // cur is the tipping point, x is max or min val
        insertAfter(cur, x);
        break;
      }
      // case 2: NO tipping point, all flat
    } else {
      if (cur.next === start) {
        // insert x before we traverse all nodes back to start
        insertAfter(cur, x);
        break;
      }
    }

    // None of the above three cases met, go to next node
    cur = cur.next;
  }

  return start;
};

/**
 * Insert value x after Node node
 * @param {ListNode} node
 * @param {number} x
 */
const insertAfter = (node, x) => {
  node.next = new ListNode(x, node.next);
};

export { insert };
