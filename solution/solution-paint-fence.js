

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const numWays = (n, k) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return k;
  }

  let same = k; // First post
  let diff = k * (k - 1); // Second post

  // Start from the 3rd post
  for (let i = 2; i < n; i++) {
    const temp = diff;
    diff = (diff + same) * (k - 1);
    same = temp;
  }

  return diff + same;
};

export { numWays };
