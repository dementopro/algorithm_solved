

/**
 * @param {string} dict
 * @param {string[]} words
 * @return {boolean}
 */
const alienOrder = (dict, words) => {
  if (!dict || dict.length === 0) {
    return false;
  }

  // Step 1. Create a mapping between the character and index
  const order = new Map();
  for (let i = 0; i < dict.length; i++) {
    order.set(dict[i], i);
  }

  // Step 2. Check each pair (words[i], words[i + 1])
  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    // Compare each character at the same position j
    for (let j = 0; j < Math.max(word1.length, word2.length); j++) {
      const c1 = word1[j];
      const c2 = word2[j];

      if (!c1 && c2) break; // word2 is longer than word1
      if (c1 && !c2) return false; // word1 is longer than word2

      if (order.get(c1) < order.get(c2)) break;
      if (order.get(c1) > order.get(c2)) return false; // wrong order
    }
  }

  // Checked every pair, all looks good!
  return true;
};

export { alienOrder };
