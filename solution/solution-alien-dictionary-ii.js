

/**
 * @param {string[]} words
 * @return {string}
 */
const alienOrder = words => {
  if (!words || words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  const adjList = new Map();

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];

    let found = false;

    for (let j = 0; j < Math.max(word1.length, word2.length); j++) {
      const c1 = word1[j];
      const c2 = word2[j];

      if (c1 && !adjList.has(c1)) {
        adjList.set(c1, []);
      }

      if (c2 && !adjList.has(c2)) {
        adjList.set(c2, []);
      }

      if (c1 && c2 && c1 !== c2 && !found) {
        adjList.get(c1).push(c2);
        found = true;
      }
    }
  }

  const visited = new Set();
  const stack = new Set();
  const result = [];

  const hasCycle = u => {
    if (visited.has(u)) {
      return false;
    }

    visited.add(u);
    stack.add(u);

    const neighbors = adjList.get(u);

    for (let i = 0; i < neighbors.length; i++) {
      const v = neighbors[i];

      if (stack.has(v)) {
        return true;
      }

      if (!visited.has(v) && hasCycle(v)) {
        return true;
      }
    }

    stack.delete(u);
    result.push(u);

    return false;
  };

  const vertices = [...adjList.keys()];

  for (let i = 0; i < vertices.length; i++) {
    const u = vertices[i];

    if (hasCycle(u)) {
      return '';
    }
  }

  return result.reverse().join('');
};

export default alienOrder;
