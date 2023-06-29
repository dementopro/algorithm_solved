

/**
 * DFS Solution
 *
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite_DFS = graph => {
  const colors = new Map();

  for (let u = 0; u < graph.length; u++) {
    if (!dfs(graph, colors, u, 0)) {
      return false;
    }
  }

  return true;
};

const dfs = (graph, colors, u, color) => {
  if (!colors.has(u)) {
    colors.set(u, color);

    for (const v of graph[u]) {
      if (!dfs(graph, colors, v, 1 - color) || colors.get(v) === color) {
        return false;
      }
    }
  }

  return true;
};

/**
 * BFS Solution
 *
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite_BFS = graph => {
  const colors = new Map();

  for (let u = 0; u < graph.length; u++) {
    if (!bfs(graph, colors, u)) {
      return false;
    }
  }

  return true;
};

const bfs = (graph, colors, u) => {
  if (!colors.has(u)) {
    const queue = [u];
    colors.set(u, 0);

    while (queue.length > 0) {
      u = queue.shift();

      for (const v of graph[u]) {
        if (colors.get(v) === colors.get(u)) {
          return false;
        }

        if (!colors.has(v)) {
          queue.push(v);
          colors.set(v, 1 - colors.get(u));
        }
      }
    }
  }

  return true;
};

export { isBipartite_DFS, isBipartite_BFS };
