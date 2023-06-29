

/**
 * @param {string} word
 * @return {string[]}
 */
const generateAbbreviations = word => {
  const result = [];
  backtracking(word, 0, 0, '', result);
  return result;
};

const backtracking = (word, index, count, solution, result) => {
  if (index === word.length) {
    if (count > 0) {
      solution += count;
    }
    result.push(solution);
    return;
  }
  
  // solution | count | word[index]
  // -------- |  10   | I

  // Case 1. Continue to use number to replace the character
  backtracking(word, index + 1, count + 1, solution, result);
  // Case 2. Stop using number to replace the character
  backtracking(word, index + 1, 0, solution + (count > 0 ? count : '') + word[index], result);
};

export { generateAbbreviations };
