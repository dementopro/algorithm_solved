

/**
 * @param {string} s
 * @return {number[]}
 */
const findPermutation = s => {
  const result = Array(s.length + 1);
  const stack = [];

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    stack.push(i + 1);

    if (s[i] === 'I') {
      while (stack.length) {
        result[j++] = stack.pop();
      }
    }
  }

  stack.push(s.length + 1);
  while (stack.length) {
    result[j++] = stack.pop();
  }

  return result;
};

export { findPermutation };
