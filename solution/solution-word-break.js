

/**
 * Recursion
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreakR = (s, wordDict) => {
  if (s === '') {
    return true;
  }

  for (let i = 1; i <= s.length; i++) {
    const prefix = s.substring(0, i);
    const rest = s.substring(i);

    if (wordDict.includes(prefix) && wordBreakR(rest, wordDict)) {
      return true;
    }
  }

  return false;
};

/**
 * Dynamic Programming
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const table = Array(s.length + 1).fill(false);

  table[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const rest = s.substring(j, i);

      if (table[j] && wordDict.includes(rest)) {
        table[i] = true;
        break;
      }
    }
  }

  return table[s.length];
};

export { wordBreakR, wordBreak };
