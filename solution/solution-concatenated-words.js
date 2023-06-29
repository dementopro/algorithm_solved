

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    words.forEach(word => {
      this.insert(word);
    });
  }

  insert(word) {
    if (!word) {
      return;
    }

    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      current = current.children[c];
    }

    current.word = word;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (!current.children[c]) {
        return 0;
      }

      current = current.children[c];

      if (current.word) {
        const rest = word.substr(current.word.length);

        if (this.search(rest) > 0) {
          return 2;
        }
      }
    }

    return current.word === word ? 1 : 0;
  }
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = words => {
  const results = [];
  const trie = new Trie(words);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const count = trie.search(word);

    if (count > 1) {
      results.push(word);
    }
  }

  return results;
};

export default findAllConcatenatedWordsInADict;
