

/**
 * @param {number} length
 * @param {number[][]} updates
 * @return {number[]}
 */
const getModifiedArray = (length, updates) => {
  const result = Array(length).fill(0);

  for (let [start, end, val] of updates) {
    result[start] += val;

    if (end + 1 < length) {
      result[end + 1] -= val;
    }
  }

  for (let i = 1; i < length; i++) {
    result[i] += result[i - 1];
  }

  return result;
};

export { getModifiedArray };
