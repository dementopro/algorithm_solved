

/**
 * Bucket Sort O(n)
 *
 * @param {string} s
 * @return {string}
 */
const frequencySort = s => {
  // Step 1. count character frequency
  const map = {};
  for (let c of s) {
    map[c] = ~~map[c] + 1;
  }

  // Step 2. build the bucket
  const bucket = Array(s.length + 1).fill('');
  Object.keys(map).forEach(c => {
    const count = map[c];
    bucket[count] += c.repeat(count);
  });

  // Step 3. build the result
  let result = '';
  for (let i = bucket.length - 1; i > 0; i--) {
    result += bucket[i];
  }
  return result;
};

export { frequencySort };
