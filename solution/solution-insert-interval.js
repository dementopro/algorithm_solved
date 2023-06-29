

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insert = (intervals, newInterval) => {
  const result = [];

  let i = 0;

  // add all the intervals ending before newInterval starts
  while (i < intervals.length && intervals[i].end < newInterval.start) {
    result.push(intervals[i++]);
  }

  // merge all overlapping intervals to one considering newInterval
  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval = new Interval(
      Math.min(intervals[i].start, newInterval.start),
      Math.max(intervals[i].end, newInterval.end)
    );
    i++;
  }

  // add the union of intervals we got
  result.push(newInterval);

  // add all the rest
  while (i < intervals.length) {
    result.push(intervals[i++]);
  }

  return result;
};
