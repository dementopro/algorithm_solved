

/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

import UndirectedGraphNode from 'common/undirected-graph-node';

/**
 * DFS Solution
 *
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
export const cloneGraph = graph => {
  const map = new Map();

  const clone = node => {
    if (!node) {
      return null;
    }

    if (map.has(node)) {
      return map.get(node);
    }

    const copy = new UndirectedGraphNode(node.label);
    map.set(node, copy);

    node.neighbors.forEach(neighbor => {
      copy.neighbors.push(clone(neighbor));
    });

    return copy;
  };

  return clone(graph);
};

/**
 * BFS Solution
 *
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
export const cloneGraphBFS = graph => {
  const getCopy = node => {
    if (map.has(node)) {
      return map.get(node);
    }
    const copy = new UndirectedGraphNode(node.label);
    map.set(node, copy);
    return copy;
  };

  if (!graph) {
    return null;
  }

  const map = new Map();
  const queue = [graph];
  const visited = new Set();

  visited.add(graph);

  while (queue.length > 0) {
    const node = queue.shift();
    const copy = getCopy(node);

    node.neighbors.forEach(neighbor => {
      const neighborCopy = getCopy(neighbor);
      copy.neighbors.push(neighborCopy);

      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    });
  }

  return map.get(graph);
};
