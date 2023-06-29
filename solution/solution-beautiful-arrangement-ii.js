

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = (n, k) => {
  const ans = Array(n);

  let c = 0;
  for (let v = 1; v < n - k; v++) {
    ans[c++] = v;
  }

  for (let i = 0; i <= k; i++) {
    ans[c++] = i % 2 === 0 ? n - k + Math.floor(i / 2) : n - Math.floor(i / 2);
  }

  return ans;
};

export { constructArray };
