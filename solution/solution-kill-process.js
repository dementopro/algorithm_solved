

/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
const killProcess = (pid, ppid, kill) => {
  // Store process tree as an adjacency list
  const adjacencyLists = {};

  ppid.map((id, index) => {
    if (!adjacencyLists[id]) {
      adjacencyLists[id] = [];
    }
    adjacencyLists[id].push(pid[index]);
  });

  const result = [];
  const stack = [kill];

  while (stack.length > 0) {
    const curr = stack.pop();
    result.push(curr);

    const adjacencyList = adjacencyLists[curr];
    if (adjacencyList) {
      stack.push(...adjacencyList);
    }
  }

  return result;
};

export default killProcess;
