

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantDirectedConnection = edges => {
  // Step 1. Check whether there is a node having two parents
  // If so, store them as candidates A and B, and set the second edge invalid
  let canA = [-1, -1];
  let canB = [-1, -1];
  let parent = Array(2001).fill(0);

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    const u = edge[0];
    const v = edge[1];

    if (parent[v] === 0) {
      parent[v] = u;
    } else {
      // Found two candidates
      canB = [u, v];
      canA = [parent[v], v];
      edges[i][1] = 0; // Mark current edge as invalid
    }
  }

  // Step 2. Perform normal union find.
  parent = Array(2001).fill(-1);

  const find = i => {
    if (parent[i] === -1) {
      return i;
    }
    return find(parent[i]);
  };

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];

    if (edge[1] === 0) {
      continue; // Ignore the invalid edge
    }

    // Find
    const x = find(edge[0]);
    const y = find(edge[1]);

    // Found a circle
    if (x === y) {
      // No candidate found, return the current edge
      if (canA[0] === -1) {
        return edge;
      }
      return canA;
    }

    // Union
    parent[x] = y;
  }

  // If the tree is valid, just return the 2nd candidate
  return canB;
};

export default findRedundantDirectedConnection;
