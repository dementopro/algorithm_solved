

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

export default class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }

      current = current.children[word[i]];
    }

    current.isEnd = true;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        return false;
      }

      current = current.children[word[i]];
    }

    return current.isEnd;
  }

  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (!(prefix[i] in current.children)) {
        return false;
      }

      current = current.children[prefix[i]];
    }

    return true;
  }
}
