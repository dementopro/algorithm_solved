

class TrieNode {
  constructor() {
    this.children = {};
    this.counts = {};
    this.isEnd = false;
  }
}

class AutocompleteSystem {
  /**
   * @param {string[]} sentences
   * @param {number[]} times
   */
  constructor(sentences, times) {
    this.root = new TrieNode();
    this.prefix = '';

    sentences.forEach((sentence, index) => {
      this.insert(sentence, times[index]);
    });
  }

  insert(sentence, count) {
    let current = this.root;

    for (let i = 0; i < sentence.length; i++) {
      const c = sentence[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      current = current.children[c];
      current.counts[sentence] = ~~current.counts[sentence] + count;
    }

    current.isEnd = true;
  }

  /**
   * @param {character} c
   * @return {string[]}
   */
  input(c) {
    if (c === '#') {
      this.insert(this.prefix, 1);
      this.prefix = '';
      return [];
    }

    // Update current user input
    this.prefix = this.prefix + c;

    // Search for matched prefix and return the suggestion
    let current = this.root;

    for (let i = 0; i < this.prefix.length; i++) {
      const t = this.prefix[i];

      if (!current.children[t]) {
        return [];
      }

      current = current.children[t];
    }

    const list = Object.keys(current.counts)
      .map(sentence => ({ sentence, count: current.counts[sentence] }))
      .sort((a, b) => {
        if (a.count === b.count) {
          return a.sentence.localeCompare(b.sentence);
        }
        return b.count - a.count;
      })
      .map(item => item.sentence)
      .slice(0, 3);

    return list;
  }
}

export default AutocompleteSystem;
