

class WordDistance {
  /**
   * @param {string[]} words
   */
  constructor(words) {
    this.map = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (!(word in this.map)) {
        this.map[word] = [];
      }
      this.map[word].push(i);
    }
  }

  /**
   * @param {string} word1
   * @param {string} word2
   * @return {number}
   */
  shortest(word1, word2) {
    const list1 = this.map[word1];
    const list2 = this.map[word2];

    let min = Infinity;

    for (let i = 0, j = 0; i < list1.length && j < list2.length; ) {
      const index1 = list1[i];
      const index2 = list2[j];

      min = Math.min(min, Math.abs(index1 - index2));

      if (index1 < index2) {
        i++;
      } else {
        j++;
      }
    }

    return min;
  }
}

export { WordDistance };
