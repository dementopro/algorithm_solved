

/**
 * @param {string[]} words
 * @return {boolean}
 */
const validWordSquare = words => {
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      // (j >= words.length) means the the number of rows is too small
      // (i >= words[j].length) means the word at j-th row is too short
      if (j >= words.length || i >= words[j].length || words[i][j] !== words[j][i]) {
        return false;
      }
    }
  }

  return true;
};

export { validWordSquare };
