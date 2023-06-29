

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestWordDistance = (words, word1, word2) => {
  let index = -1;
  let min = words.length;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1 || words[i] === word2) {
      if (index !== -1 && (word1 === word2 || words[index] !== words[i])) {
        min = Math.min(i - index, min);
      }
      index = i;
    }
  }

  return min;
};

export { shortestWordDistance };
