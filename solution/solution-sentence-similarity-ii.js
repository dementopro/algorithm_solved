

/**
 * Solution: Union Find
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
const areSentencesSimilarTwo = (words1, words2, pairs) => {
  if (words1.length !== words2.length) {
    return false;
  }

  // Build the hash map for union find
  const map = new Map();
  for (let pair of pairs) {
    const parent1 = find(map, pair[0]);
    const parent2 = find(map, pair[1]);

    if (parent1 !== parent2) {
      map.set(parent1, parent2);
    }
  }

  for (let i = 0; i < words1.length; i++) {
    const word1 = words1[i];
    const word2 = words2[i];

    if (word1 !== word2 && find(map, word1) !== find(map, word2)) {
      return false;
    }
  }

  return true;
};

const find = (map, word) => {
  if (!map.has(word)) {
    map.set(word, word);
  }
  return word === map.get(word) ? word : find(map, map.get(word));
};

export { areSentencesSimilarTwo };
