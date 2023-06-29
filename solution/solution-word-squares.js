

class TrieNode {
  constructor() {
    this.children = {};
    this.words = []; // A list of words that have the same prefix
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
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      current = current.children[c];
      current.words.push(word); // Record this word for the current prefix
    }
  }

  search(solution, results) {
    const count = solution.length;
    const length = solution[0].length;

    if (count === length) {
      return results.push(solution.slice()); // Found enough words
    }

    // Step 1. Get the prefix for the next word
    let prefix = '';
    for (let i = 0; i < count; i++) {
      prefix += solution[i][count] ? solution[i][count] : '';
    }

    // Step 2. Search the word with prefix in the trie
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix[i];

      if (!current.children[c]) {
        return;
      }

      current = current.children[c];
    }

    // Step 3. Try each possible word
    const words = current.words;
    for (let j = 0; j < words.length; j++) {
      solution.push(words[j]); // Try this word
      this.search(solution, results);
      solution.pop(); // Backtracking
    }
  }
}

/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = words => {
  const results = [];
  const trie = new Trie(words);

  for (let i = 0; i < words.length; i++) {
    trie.search([words[i]], results);
  }

  return results;
};

export default wordSquares;
