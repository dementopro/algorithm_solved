

/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
const addBoldTag = (s, dict) => {
  const trie = new Trie(dict);
  let intervals = [];

  // Step 1. Get the initial intervals
  for (let i = 0; i < s.length; i++) {
    const maxLength = trie.search(s.substr(i));

    if (maxLength > 0) {
      intervals.push({
        start: i,
        end: i + maxLength - 1,
      });
    }
  }

  // Step 2. Merge intervals
  intervals = mergeIntervals(intervals);

  // Step 3. Add <b></b> tags
  const arr = s.split('');
  intervals.forEach(({ start, end }) => {
    arr[start] = `<b>${arr[start]}`;
    arr[end] = `${arr[end]}</b>`;
  });
  return arr.join('');
};

const mergeIntervals = intervals => {
  let i = 0;

  for (let j = 0; j < intervals.length; j++) {
    const current = intervals[i];
    const next = intervals[j];

    if (next.start <= current.end + 1) {
      current.end = Math.max(current.end, next.end);
    } else {
      intervals[++i] = next;
    }
  }

  return intervals.slice(0, i + 1);
};

class TrieNode {
  constructor() {
    this.children = {};
    this.length = null;
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

      if (!(c in current.children)) {
        current.children[c] = new TrieNode();
      }

      current = current.children[c];
    }

    current.length = word.length;
  }

  search(s) {
    let current = this.root;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
      const c = s[i];

      if (!(c in current.children)) {
        break;
      }

      current = current.children[c];

      if (current.length !== null) {
        maxLength = current.length;
      }
    }

    return maxLength;
  }
}

export default addBoldTag;
