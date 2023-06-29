

import PriorityQueue from 'common/priority-queue';

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = tickets => {
  // Step 1. Build the graph using adjacency list
  const adjList = buildGraph(tickets);

  // Step 2. Topological sort
  const result = [];

  dfs(adjList, 'JFK', result);

  return result.reverse();
};

const dfs = (adjList, u, result) => {
  // This is a special topological sort
  // as each node might be visited multiple times
  // and all the nodes have to be visited
  // that's why we use a while loop here instead of using visited set
  while (adjList.has(u) && adjList.get(u).size() > 0) {
    const v = adjList.get(u).poll();
    dfs(adjList, v, result);
  }

  result.push(u);
};

const buildGraph = tickets => {
  const adjList = new Map();

  tickets.forEach(([from, to]) => {
    if (!adjList.has(from)) {
      adjList.set(from, new PriorityQueue({ comparator: (a, b) => a.localeCompare(b) }));
    }
    adjList.get(from).offer(to);
  });

  return adjList;
};

export default findItinerary;
