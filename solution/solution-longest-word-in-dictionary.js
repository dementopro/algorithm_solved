

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
      this.addWord(word);
    });
  }

  addWord(word) {
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
}

const filter = node => {
  return Object.keys(node.children)
    .filter(c => !!node.children[c].word)
    .map(c => node.children[c])
    .sort((a, b) => b.word.localeCompare(a.word));
};

/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = words => {
  const trie = new Trie(words);
  let result = null;

  // Perform BFS
  let queue = filter(trie.root);

  while (queue.length > 0) {
    const node = queue.shift();
    const next = filter(node);

    result = node.word;
    queue = queue.concat(next);
  }

  return result;
};

export default longestWord;
