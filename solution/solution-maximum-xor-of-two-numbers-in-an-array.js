

const INT_SIZE = 32;

class TrieNode {
  constructor() {
    this.children = {};
    this.num = null;
  }
}

class Trie {
  /**
   * @param {number[]} nums
   */
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {number} num
   */
  insert(num) {
    let current = this.root;

    for (let i = INT_SIZE - 1; i >= 0; i--) {
      const bit = (num & ((1 << i) >>> 0)) > 0 ? 1 : 0;

      if (!current.children[bit]) {
        current.children[bit] = new TrieNode();
      }
      current = current.children[bit];
    }

    current.num = num;
  }

  /**
   * @param {number} num
   */
  search(num) {
    let current = this.root;

    for (let i = INT_SIZE - 1; i >= 0; i--) {
      const bit = (num & ((1 << i) >>> 0)) > 0 ? 1 : 0;

      if (current.children[1 - bit]) {
        current = current.children[1 - bit];
      } else {
        current = current.children[bit];
      }
    }

    return current.num;
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = nums => {
  let max = 0;

  const trie = new Trie();
  trie.insert(nums[0]);

  for (let i = 1; i < nums.length; i++) {
    const num = trie.search(nums[i]);
    max = Math.max(max, num ^ nums[i]);
    trie.insert(nums[i]);
  }

  return max;
};

export default findMaximumXOR;
