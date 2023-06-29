

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countCornerRectangles = grid => {
  const m = grid.length;
  const n = grid[0].length;

  let result = 0;

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      let count = 0;
      for (let k = 0; k < n; k++) {
        if (grid[i][k] === 1 && grid[j][k] === 1) {
          count++;
        }
      }
      result += (count * (count - 1)) / 2;
    }
  }

  return result;
};

export { countCornerRectangles };
