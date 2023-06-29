

/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
const validWordAbbreviation = (word, abbr) => {
  const m = word.length;
  const n = abbr.length;

  let i = 0;
  let j = 0;

  while (i < m && j < n) {
    if (abbr[j] >= '1' && abbr[j] <= '9') {
      let count = 0;
      while (abbr[j] >= '0' && abbr[j] <= '9') {
        count = count * 10 + (abbr[j] - '0');
        j++;
      }
      i += count;
    } else if (word[i] === abbr[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  return i === m && j === n;
};

export { validWordAbbreviation };
