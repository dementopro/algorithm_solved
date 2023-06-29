

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
const areSentencesSimilar = (words1, words2, pairs) => {
  if (!words1 && !words2) {
    return true;
  }

  if (!words1 || !words2 || words1.length !== words2.length) {
    return false;
  }

  const map = new Map();

  for (let [s1, s2] of pairs) {
    if (!map.has(s1)) {
      map.set(s1, new Set());
    }
    map.get(s1).add(s2);

    if (!map.has(s2)) {
      map.set(s2, new Set());
    }
    map.get(s2).add(s1);
  }

  for (let i = 0; i < words1.length; i++) {
    if (words1[i] === words2[i]) {
      continue;
    }

    if (!map.has(words1[i])) {
      return false;
    }

    if (!map.get(words1[i]).has(words2[i])) {
      return false;
    }
  }

  return true;
};

export { areSentencesSimilar };
