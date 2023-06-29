

/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = time => {
  const set = new Set();
  [0, 1, 3, 4].map(d => set.add(parseInt(time.substr(d, 1))));

  if (set.size === 1) {
    return time;
  }

  const digits = Array.from(set);
  const target = parseInt(time.substr(0, 2)) * 60 + parseInt(time.substr(3, 2));

  let minDiff = Number.MAX_SAFE_INTEGER;
  let result = '';

  const dfs = (digits, solution, index, target) => {
    if (index === 4) {
      const minutes = parseInt(solution.substr(0, 2)) * 60 + parseInt(solution.substr(2, 2));

      if (minutes !== target) {
        const diff = minutes > target ? minutes - target : 1440 + minutes - target;

        if (diff < minDiff) {
          minDiff = diff;
          result = solution.substr(0, 2) + ':' + solution.substr(2, 2);
        }
      }

      return;
    }

    for (let digit of digits) {
      if (index === 0 && digit > 2) continue;
      if (index === 1 && parseInt(solution[0]) * 10 + digit > 23) continue;
      if (index === 2 && digit > 5) continue;
      if (index === 3 && parseInt(solution[2]) * 10 + digit > 59) continue;

      dfs(digits, solution + digit, index + 1, target);
    }
  };

  dfs(digits, '', 0, target);

  return result;
};
