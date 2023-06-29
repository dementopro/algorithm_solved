

import { randomInt } from 'utils/random';

/**
 * @param {number[]} stream
 * @param {number} k
 * @return {number[]}
 */
const selectKItems = (stream, k) => {
  const n = stream.length;

  // reservoir[] is the output array. Initialize it with first k elements from stream[]
  const reservoir = Array(k);
  for (let i = 0; i < k; i++) {
    reservoir[i] = stream[i];
  }

  // iterate from the (k+1)th element to nth element
  for (let i = k; i < n; i++) {
    // pick a random index from 0 to i
    const j = randomInt(0, i, true);

    // If the randomly  picked index is smaller than k,
    // then replace the element present at the index
    // with new element from stream
    if (j < k) {
      reservoir[j] = stream[i];
    }
  }
};

export { selectKItems };
