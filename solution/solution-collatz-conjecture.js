

/**
 * Q1: Get the number of transformation
 * @param {number} num
 */
const findSteps = num => {
  if (num <= 1) return 1;
  if (num % 2 === 0) return 1 + findSteps(num / 2);
  return 1 + findSteps(3 * num + 1);
};

/**
 * Q1: Get the number of transformation with memorization
 * @param {number} num
 */
const findStepsII = num => {
  const map = new Map();

  const helper = n => {
    if (n <= 1) return 1;

    if (map.has(n)) return map.get(n);

    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = 3 * n + 1;
    }

    if (map.has(n)) return map.get(n);

    const t = helper(n);
    map.set(n, t);

    return 1 + t;
  };

  return helper(num);
};

/**
 * Q2: Get the longest count of transformation for num in [1 ... N]
 * @param {number} num
 */
const findLongestSteps = num => {
  if (num < 1) return 0;

  let res = 0;
  for (let i = 1; i <= num; i++) {
    const t = findSteps(i);
    res = Math.max(res, t);
  }

  return res;
};

export { findSteps, findStepsII, findLongestSteps };
