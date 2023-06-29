

/**
 * DFS Solution
 *
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
export const sequenceReconstructionDFS = (org, seqs) => {
  // Step 1. Build the graph using adjacency list and indgree map
  const { adjList, indegree } = buildGraph(seqs);

  // Step 2. Find all topological sort
  const visited = new Set();

  const results = [];

  dfs(adjList, indegree, visited, results, []);

  return results.length === 1 && results[0].toString() === org.toString();
};

/**
 * BFS Solution
 *
 * @param {number[]} org
 * @param {number[][]} seqs
 * @return {boolean}
 */
export const sequenceReconstructionBFS = (org, seqs) => {
  // Step 1. Build the graph using adjacency list and indgree map
  const { adjList, indegree } = buildGraph(seqs);

  // Step 2. BFS
  const verticies = [...adjList.keys()];

  if (verticies.length !== org.length) {
    return false;
  }

  // Create a queue and enqueue all vertices with indegree 0
  const queue = verticies.filter(u => indegree.get(u) === 0);

  // Initialize count of visited vertices
  let index = 0;

  while (queue.length > 0) {
    const size = queue.length;

    if (size > 1) {
      return false;
    }

    const u = queue.shift();

    if (u !== org[index++]) {
      return false;
    }

    adjList.get(u).forEach(v => {
      indegree.set(v, indegree.get(v) - 1);

      if (indegree.get(v) === 0) {
        queue.push(v);
      }
    });
  }

  return index === org.length;
};

const dfs = (adjList, indegree, visited, results, solution) => {
  const verticies = [...adjList.keys()];

  // To indicate whether all topological are found or not
  let flag = false;

  for (let i = 0; i < verticies.length; i++) {
    const u = verticies[i];

    // If indegree is 0 and not yet visited then only choose that vertex
    if (indegree.get(u) === 0 && !visited.has(u)) {
      // Meaning that we still have nodes to traverse, we are not finished yet
      flag = true;

      // Reducing indegree of adjacent vertices
      adjList.get(u).forEach(v => {
        indegree.set(v, indegree.get(v) - 1);
      });

      // Including in result
      solution.push(u);
      visited.add(u);

      dfs(adjList, indegree, visited, results, solution);

      // Resetting visited, res and indegree for backtracking
      visited.delete(u);
      solution.pop();
      adjList.get(u).forEach(v => {
        indegree.set(v, indegree.get(v) + 1);
      });
    }
  }

  // We reach here if all vertices are visited.
  // So we add the solution here
  if (!flag) {
    results.push(solution.slice());
  }
};

const buildGraph = seqs => {
  const adjList = new Map();
  const indegree = new Map();

  seqs.forEach(seq => {
    for (let i = 0; i < seq.length; i++) {
      const v = seq[i];

      if (!adjList.has(v)) {
        adjList.set(v, []);
        indegree.set(v, 0);
      }

      if (i > 0) {
        const u = seq[i - 1];

        adjList.get(u).push(v);
        indegree.set(v, indegree.get(v) + 1);
      }
    }
  });

  return { adjList, indegree };
};
