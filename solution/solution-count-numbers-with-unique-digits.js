

/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigitsR = n => {
  const result = [];
  backtracking(n, 0, 0, new Set(), result);
  return result.length;
};

const backtracking = (n, start, num, set, result) => {
  if (start === n) {
    result.push(num);
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (!set.has(i) || num === 0) {
      set.add(i);
      backtracking(n, start + 1, num * 10 + i, set, result);
      set.delete(i);
    }
  }
};

/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = n => {
  if (n === 0) {
    return 1;
  }

  let count = 10;
  let unique = 9;
  let ok = 9;

  while (n-- > 1 && ok > 0) {
    unique = unique * ok;
    count += unique;
    ok--;
  }

  return count;
};

export { countNumbersWithUniqueDigitsR, countNumbersWithUniqueDigits };
