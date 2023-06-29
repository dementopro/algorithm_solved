

import PriorityQueue from 'common/priority-queue';

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  const result = [];
  const map = new Map();
  const queue = new PriorityQueue({
    comparator: (a, b) => {
      if (a.count < b.count) {
        return 1;
      } else if (a.count > b.count) {
        return -1;
      }
      return a.key.localeCompare(b.key);
    },
  });

  // Count the words
  words.forEach(word => {
    if (!map.has(word)) {
      map.set(word, 0);
    }
    map.set(word, map.get(word) + 1);
  });

  // Put the counted words to a max heap
  map.forEach((count, key) => {
    queue.offer({ key, count });
  });

  // Dequeue the max heap to results
  while (k-- > 0) {
    const { key } = queue.poll();
    result.push(key);
  }

  return result;
};

export default topKFrequent;
