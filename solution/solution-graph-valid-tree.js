

/**
 * The graph solution using adjacency list
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
export const validGraphTree = (n, edges) => {
  // Build the undirected graph using adjacency list
  const adjList = new Map();

  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }

  edges.forEach(edge => {
    const u = edge[0];
    const v = edge[1];

    adjList.get(u).push(v);
    adjList.get(v).push(u);
  });

  // check if there's a cycle
  const visited = new Set();

  const hasCycle = (u, parent) => {
    visited.add(u);

    const neighbors = adjList.get(u);

    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];

      if (visited.has(v) && v !== parent) {
        return true;
      }

      if (!visited.has(v) && hasCycle(v, u)) {
        return true;
      }
    }

    return false;
  };

  if (hasCycle(0, -1)) {
    return false;
  }

  // Make sure all verticies are connected
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      return false;
    }
  }

  return true;
};

/**
 * The union-find solution
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
export const validTree = (n, edges) => {
  // Initialize n isolated islands
  const nums = Array(n).fill(-1);

  const find = i => {
    if (nums[i] === -1) {
      return i;
    }
    return find(nums[i]);
  };

  // Perform union find for every edge
  for (let i = 0; i < edges.length; i++) {
    const x = find(edges[i][0]);
    const y = find(edges[i][1]);

    // If two vertices happen to be in the same set
    // then there's a cycle
    if (x === y) {
      return false;
    }

    // Union
    nums[x] = y;
  }

  return edges.length === n - 1;
};
