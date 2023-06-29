

/**
 * HashSet Solution
 *
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
const boldWords = (words, S) => {
  // Step 1. Record all the bold positions
  const bold = new Set();

  for (let word of words) {
    for (let i = 0; i < S.length; i++) {
      if (S.substring(i, i + word.length) === word) {
        for (let j = i; j < i + word.length; j++) {
          bold.add(j);
        }
      }
    }
  }

  // Step 2. Reconstruct the string
  let res = '';
  for (let i = 0; i < S.length; i++) {
    if (bold.has(i) && !bold.has(i - 1)) res += '<b>';
    res += S[i];
    if (bold.has(i) && !bold.has(i + 1)) res += '</b>';
  }

  return res;
};

/**
 * Merge Intervals Solution
 *
 * @param {string[]} words
 * @param {string} S
 * @return {string}
 */
const boldWords_II = (words, S) => {
  let intervals = [];

  // Step 1. Get all the intervals
  for (let word of words) {
    for (let i = 0; i < S.length; i++) {
      if (S.substring(i, i + word.length) === word) {
        intervals.push([i, i + word.length - 1]);
      }
    }
  }

  // Step 2. Merge all the intervals
  intervals = mergeIntervals(intervals);

  // Step 3. Add <b></b> tags
  const arr = S.split('');
  for (let interval of intervals) {
    arr[interval[0]] = '<b>' + arr[interval[0]];
    arr[interval[1]] = arr[interval[1]] + '</b>';
  }
  return arr.join('');
};

const mergeIntervals = intervals => {
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 1;

  for (let j = 1; j < intervals.length; j++) {
    let prev = intervals[i];
    let curr = intervals[j];

    if (prev[1] + 1 < curr[0]) {
      intervals[++i] = intervals[j];
    } else {
      prev[1] = Math.max(prev[1], curr[1]);
    }
  }

  return intervals.slice(0, i + 1);
};

export { boldWords, boldWords_II };
