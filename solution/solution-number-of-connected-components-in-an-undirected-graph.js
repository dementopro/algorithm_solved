

/**
 * DFS Solution
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
export const countComponentsDFS = (n, edges) => {
  const adjList = buildGraph(n, edges);

  // Traverse all the nodes
  const visited = new Set();

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(adjList, i, visited);
      count++;
    }
  }

  return count;
};

/**
 * BFS Solution
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
export const countComponentsBFS = (n, edges) => {
  const adjList = buildGraph(n, edges);

  // Traverse all the nodes
  const visited = new Set();

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      bfs(adjList, i, visited);
      count++;
    }
  }

  return count;
};

/**
 * Union-Find Solution
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
export const countComponentsUnionFind = (n, edges) => {
  const nums = Array(n).fill(-1);

  // Step 1. union find
  const find = i => {
    if (nums[i] === -1) {
      return i;
    }
    return find(nums[i]);
  };

  for (let i = 0; i < edges.length; i++) {
    const x = find(edges[i][0]);
    const y = find(edges[i][1]);

    // Union
    if (x !== y) {
      nums[x] = y;
    }
  }

  // Step 2. count the -1
  return nums.filter(num => num === -1).length;
};

/**
 * DFS tarverse the graph
 *
 * @param {Map} adjList
 * @param {number} u
 * @param {Set} visited
 */
const dfs = (adjList, u, visited) => {
  visited.add(u);

  adjList.get(u).forEach(v => {
    if (!visited.has(v)) {
      dfs(adjList, v, visited);
    }
  });
};

/**
 * BFS traverse the graph
 *
 * @param {map} adjList
 * @param {number} node
 * @param {Set} visited
 */
const bfs = (adjList, node, visited) => {
  const queue = [node];
  visited.add(node);

  while (queue.length > 0) {
    const u = queue.shift();

    adjList.get(u).forEach(v => {
      if (!visited.has(v)) {
        queue.push(v);
        visited.add(v);
      }
    });
  }
};

/**
 * Build the graph using adjacency list
 *
 * @param {number} n
 * @param {number[][]} edges
 */
const buildGraph = (n, edges) => {
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

  return adjList;
};
