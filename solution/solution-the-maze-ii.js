

/**
 * DFS Solution
 *
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {number}
 */
const shortestDistance = (maze, start, destination) => {
  const m = maze.length;
  const n = maze[0].length;
  const distance = Array(m)
    .fill()
    .map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));

  distance[start[0]][start[1]] = 0;

  dfs(maze, start, distance);

  return distance[destination[0]][destination[1]] === Number.MAX_SAFE_INTEGER
    ? -1
    : distance[destination[0]][destination[1]];
};

const dfs = (maze, start, distance) => {
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const [x, y] = start;

  for (let [dx, dy] of dirs) {
    let i = x + dx;
    let j = y + dy;
    let count = 0;

    while (i >= 0 && j >= 0 && i < maze.length && j < maze[0].length && maze[i][j] === 0) {
      count++;
      i += dx;
      j += dy;
    }

    i -= dx;
    j -= dy;

    if (distance[i][j] > distance[x][y] + count) {
      distance[i][j] = distance[x][y] + count;
      dfs(maze, [i, j], distance);
    }
  }
};

export { shortestDistance };
