

import PriorityQueue from 'common/priority-queue';

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
const employeeFreeTime = schedule => {
  const result = [];

  const pq = new PriorityQueue({ comparator: (a, b) => a.start - b.start });
  schedule.forEach(list => list.forEach(e => pq.offer(e)));

  let current = pq.poll();

  while (!pq.isEmpty()) {
    if (current.end < pq.peek().start) {
      // no intersect
      result.push(new Interval(current.end, pq.peek().start));
      // becomes the next current interval
      current = pq.poll();
    } else {
      // intersect or sub merged
      current = Math.max(current.end, pq.peek().end);
      pq.poll();
    }
  }

  return result;
};

export { employeeFreeTime };
