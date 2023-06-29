

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
  // While there may be chars in S or T
  for (let i = S.length - 1, j = T.length - 1, skipS = 0, skipT = 0; i >= 0 || j >= 0; i--, j--) {
    // Find position of next possible char in S
    while (i >= 0) {
      if (S[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }

    // Find position of next possible char in T
    while (j >= 0) {
      if (T[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }

    // If two actual characters are different
    if (i >= 0 && j >= 0 && S[i] != T[j]) {
      return false;
    }

    // If expecting to compare char vs nothing
    if (i >= 0 !== j >= 0) {
      return false;
    }
  }

  return true;
};

export { backspaceCompare };
