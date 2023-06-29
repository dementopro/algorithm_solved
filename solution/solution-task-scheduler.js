

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  // Step 1. count the max occurance and how many tasks have the same max count
  let max = 0;
  let maxCount = 0;

  const map = {};
  for (let task of tasks) {
    map[task] = ~~map[task] + 1;
    if (map[task] === max) {
      maxCount++;
    } else if (map[task] > max) {
      max = map[task];
      maxCount = 1;
    }
  }

  // Step 2. group the max occurance chars together, e.g. CE-CE-CE
  // update the left cooling intervals in each group
  const groups = max - 1;
  const coolingLeft = n - (maxCount - 1);

  // Step 3. put the rest tasks into the empty slots
  const emptySlots = groups * coolingLeft;
  const tasksLeft = tasks.length - max * maxCount;

  // Step 4. calculate the idle tasks
  const idle = Math.max(0, emptySlots - tasksLeft);

  return tasks.length + idle;
};

export { leastInterval };
