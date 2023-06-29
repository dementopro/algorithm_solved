

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = matrix => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const m = matrix.length;
  const n = matrix[0].length;

  const pacific = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  const atlantic = Array(m)
    .fill()
    .map(() => Array(n).fill(false));

  const res = [];

  // left and right borders
  for (let i = 0; i < m; i++) {
    dfs(matrix, pacific, i, 0, Number.MIN_SAFE_INTEGER);
    dfs(matrix, atlantic, i, n - 1, Number.MIN_SAFE_INTEGER);
  }

  // top and bottom borders
  for (let j = 0; j < n; j++) {
    dfs(matrix, pacific, 0, j, Number.MIN_SAFE_INTEGER);
    dfs(matrix, atlantic, m - 1, j, Number.MIN_SAFE_INTEGER);
  }

  // get final result
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j]);
      }
    }
  }

  return res;
};

const dfs = (matrix, ocean, x, y, height) => {
  console.log(ocean);
  const m = matrix.length;
  const n = matrix[0].length;

  if (x < 0 || x >= m || y < 0 || y >= n) {
    return; // outside of the matrix
  }

  if (ocean[x][y]) {
    return; // visited already
  }

  if (matrix[x][y] < height) {
    return; // sea level is not enough
  }

  ocean[x][y] = true; // can flow to the ocean from (x, y)

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  for (let [dx, dy] of dirs) {
    dfs(matrix, ocean, x + dx, y + dy, matrix[x][y]);
  }
};

export { pacificAtlantic };
