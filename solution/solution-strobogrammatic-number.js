

/**
 * @param {string} num
 * @return {boolean}
 */
const isStrobogrammatic = num => {
  const map = new Map([['6', '9'], ['9', '6'], ['0', '0'], ['1', '1'], ['8', '8']]);

  for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
    if (!map.has(num[i]) || map.get(num[i]) !== num[j]) {
      return false;
    }
  }

  return true;
};

export { isStrobogrammatic };
