

/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = ratings => {
  if (!ratings || ratings.length === 0) return 0;

  const n = ratings.length;

  // arr[i] stores the num of candies of i-th kid
  const arr = Array(n).fill(0);
  arr[0] = 1;

  // scan from left to right
  for (let i = 1; i < n; i++) {
    arr[i] = ratings[i] > ratings[i - 1] ? arr[i - 1] + 1 : 1;
  }

  // scan from right to left
  let sum = arr[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      arr[i] = Math.max(arr[i], arr[i + 1] + 1);
    }

    sum += arr[i];
  }

  return sum;
};

export { candy };
