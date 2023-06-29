

class TrieNode {
  constructor() {
    this.children = {};
    this.word = false;
  }
}

class Trie {
  constructor(dict) {
    this.root = new TrieNode();

    dict.forEach(word => {
      this.insert(word);
    });
  }

  insert(word) {
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
        return word;
      }
      current = current.children[c];
      if (current.word) {
        return current.word;
      }
    }
    return word;
  }
}

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = (dict, sentence) => {
  const trie = new Trie(dict);
  const original = sentence.split(' ');
  const result = original.map(word => trie.search(word));
  return result.join(' ');
};

export default replaceWords;
