

/**
 * @param {string[]} words
 * @param {string} traget
 * @param {number} k
 * @return {string[]}
 */
const kEditDistance = (words, target, k) => {
  const result = [];
  const trie = new Trie(words);

  // The edit distance from curr to target
  const dist = Array(target.length + 1);
  for (let i = 0; i < dist.length; i++) {
    dist[i] = i;
  }

  search(target, k, trie.root, dist, '', result);

  return result;
};

const search = (target, k, root, prevDist, curr, result) => {
  if (root.isWord) {
    if (prevDist[target.length] <= k) {
      result.push(curr);
    } else {
      return;
    }
  }

  for (let c in root.children) {
    const currDist = Array(target.length + 1);
    currDist[0] = curr.length + 1;

    for (let i = 1; i < prevDist.length; i++) {
      if (target[i - 1] === c) {
        currDist[i] = prevDist[i - 1];
      } else {
        currDist[i] = Math.min(Math.min(prevDist[i - 1], prevDist[i]), currDist[i - 1]) + 1;
      }
    }

    search(target, k, root.children[c], currDist, curr + c, result);
  }
};

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
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
    }

    current.isWord = true;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

export { kEditDistance };
