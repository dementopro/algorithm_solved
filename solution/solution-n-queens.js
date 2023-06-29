

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = n => {
  const results = [];
  backtracking(n, 0, [], results);
  return results;
};

const formatResult = (n, columns) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const arr = Array(n).fill('.');
    arr[columns[i]] = 'Q';
    result.push(arr.join(''));
  }
  return result;
};

const isValid = (row, columns) => {
  for (let i = 0; i < row; i++) {
    if (columns[i] === columns[row]) {
      return false; // Two queues are in the same column
    }

    if (row - i === Math.abs(columns[row] - columns[i])) {
      return false; // Two queues are in the same diagonal
    }
  }

  return true;
};

const backtracking = (n, row, columns, results) => {
  if (row === n) {
    results.push(formatResult(n, columns));
    return;
  }

  for (let j = 0; j < n; j++) {
    columns[row] = j;

    if (isValid(row, columns)) {
      backtracking(n, row + 1, columns, results);
    }
  }
};

export default solveNQueens;
