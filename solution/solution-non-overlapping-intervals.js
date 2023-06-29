

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = intervals => {
  if (intervals.length === 0) {
    return 0;
  }

  intervals.sort((a, b) => a.end - b.end);

  let end = intervals[0].end;
  let count = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start >= end) {
      end = intervals[i].end;
      count++;
    }
  }

  return intervals.length - count;
};

export { eraseOverlapIntervals };
