

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = (s, t) => {
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] !== t[i]) {
      if (s.length === t.length) {
        // s has the same length as t, so the only possibility is replacing one char in s and t
        return s.substring(i + 1) === t.substring(i + 1);
      } else if (s.length < t.length) {
        // t is longer than s, so the only possibility is deleting one char from t
        return s.substring(i) === t.substring(i + 1);
      } else {
        // s is longer than t, so the only possibility is deleting one char from s
        return t.substring(i) === s.substring(i + 1);
      }
    }
  }

  // All previous chars are the same, the only possibility is deleting the end char in the longer one of s and t
  return Math.abs(s.length - t.length) === 1;
};

export { isOneEditDistance };
