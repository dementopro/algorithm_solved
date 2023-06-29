

/**
 * @param {number} n
 * @return {string}
 */
const findContestMatch = n => {
  let pairs = Array.from({ length: n }, (v, k) => k + 1);

  while (pairs.length > 1) {
    const temp = [];

    for (let i = 0, j = pairs.length - 1; i < j; i++, j--) {
      temp.push('(' + pairs[i] + ',' + pairs[j] + ')');
    }

    pairs = temp;
  }

  return pairs[0];
};

export { findContestMatch };
