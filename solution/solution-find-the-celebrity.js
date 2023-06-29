

/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */
const solution = knows => {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return n => {
    // base case
    if (n <= 0) return -1;
    if (n == 1) return 0;

    const stack = [];

    // put all people to the stack
    for (let i = 0; i < n; i++) {
      stack.push(i);
    }

    let a = 0;
    let b = 0;

    while (stack.length >= 2) {
      a = stack.pop();
      b = stack.pop();

      if (knows(a, b)) {
        // a knows b, so a is not the celebrity, but b may be
        stack.push(b);
      } else {
        // a doesn't know b, so b is not the celebrity, but a may be
        stack.push(a);
      }
    }

    // double check the potiential celebrity
    let c = stack.pop();

    for (let i = 0; i < n; i++) {
      // c should not know anyone else
      if (i !== c && (knows(c, i) || !knows(i, c))) {
        return -1;
      }
    }

    return c;
  };
};

export { solution };
