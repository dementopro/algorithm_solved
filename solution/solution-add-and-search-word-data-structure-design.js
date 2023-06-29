

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

export default class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    var current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
    }

    current.isEnd = true;
  }

  search(word) {
    var search = function(current, level) {
      // Cannot search for the word
      if (!current || (level === word.length && !current.isEnd)) {
        return false;
      }

      if (level === word.length && current.isEnd) {
        return true;
      }

      if (word[level] === '.') {
        for (let i = 0; i < 26; i++) {
          var ch = String.fromCharCode(97 + i);

          if (search(current.children[ch], level + 1)) {
            return true;
          }
        }

        return false;
      }

      return search(current.children[word[level]], level + 1);
    };

    return search(this.root, 0);
  }
}
