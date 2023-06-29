

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let code = t.charCodeAt(t.length - 1);

  for (let i = 0; i < t.length - 1; i++) {
    code ^= s.charCodeAt(i);
    code ^= t.charCodeAt(i);
  }

  return String.fromCharCode(code);
};
