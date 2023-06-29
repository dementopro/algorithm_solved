

import Queue from 'common/queue';
import UndirectedGraphNode from 'common/undirected-graph-node';

/**
 * Encodes an undirected graph to a single string.
 *
 * @param {UndirectedGraphNode} graph
 * @return {string}
 */
export const serializeUndirectedGraph = graph => {
  if (!graph) {
    return null;
  }

  const queue = new Queue();
  queue.enqueue(graph);

  const adjacencyList = new Map();

  const visited = new Set();
  visited.add(graph);

  const result = [];

  while (!queue.isEmpty()) {
    const size = queue.size();

    for (let i = 0; i < size; i++) {
      const node = queue.dequeue();
      const { label, neighbors } = node;

      if (!adjacencyList.has(node)) {
        adjacencyList.set(node, new Set());
      }

      const level = [label];

      for (let j = 0; j < neighbors.length; j++) {
        const neighbor = neighbors[j];

        if (!adjacencyList.has(neighbor)) {
          adjacencyList.set(neighbor, new Set());
        }

        if (!adjacencyList.get(node).has(neighbor)) {
          adjacencyList.get(node).add(neighbor);
          adjacencyList.get(neighbor).add(node);

          level.push(neighbor.label);
        }

        if (!visited.has(neighbor)) {
          queue.enqueue(neighbor);
          visited.add(neighbor);
        }
      }

      result.push(level.join(','));
    }
  }

  return result.join('#');
};

/**
 * Decodes your encoded data to UndirectedGraphNode
 *
 * @param {string} str
 * @return {UndirectedGraphNode}
 */
export const deserializeUndirectedGraph = str => {
  const getNode = label => {
    if (map.has(label)) {
      return map.get(label);
    }

    const node = new UndirectedGraphNode(label);
    map.set(label, node);
    return node;
  };

  if (!str) {
    return null;
  }

  let graph = null;
  const map = new Map();

  const levels = str.split('#');

  levels.forEach(level => {
    const labels = level.split(',');
    const node = getNode(labels[0]);

    if (!graph) {
      graph = node;
    }

    for (let i = 1; i < labels.length; i++) {
      const neighbor = getNode(labels[i]);

      node.neighbors.push(neighbor);
      neighbor.neighbors.push(node);
    }
  });

  return graph;
};
