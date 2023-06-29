

/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
const pyramidTransition = (bottom, allowed) => {
  const dict = new Map();

  for (let s of allowed) {
    const key = s.substr(0, 2);
    const val = s.substr(2);

    if (!dict.has(key)) {
      dict.set(key, []);
    }
    dict.get(key).push(val);
  }

  return dfs(bottom, dict);
};

const dfs = (bottom, dict) => {
  if (bottom.length === 1) {
    return true;
  }

  for (let i = 0; i < bottom.length - 1; i++) {
    const key = bottom.substr(i, i + 2);

    if (!dict.has(key)) {
      return false;
    }
  }

  const bottoms = [];
  getBottoms(bottom, dict, 0, '', bottoms);

  for (let bottom of bottoms) {
    if (dfs(bottom, dict)) {
      return true;
    }
  }

  return false;
};

const getBottoms = (bottom, dict, index, solution, bottoms) => {
  if (index === bottom.length - 1) {
    return bottoms.push(solution);
  }

  const key = bottom.substr(index, index + 2);

  for (let c of dict.get(key)) {
    getBottoms(bottom, dict, index + 1, solution + c, bottoms);
  }
};

export { pyramidTransition };
