

/**
 * Print the pages by page size
 * @param {string[]} input
 * @return {string[][]}
 */
const displayPages = (input, pageSize) => {
  if (!input || input.length === 0) {
    return [];
  }

  const pages = [];
  const visited = new Set();
  const deleted = new Set();
  let page = [];
  let i = 0;

  while (input.length > 0) {
    const curr = input[i];
    const hostId = curr.split(',')[0];

    // Should we add the record to the current page
    if (!visited.has(hostId)) {
      page.push(curr);
      visited.add(hostId);
      deleted.add(i);
    }

    // Is current page full
    if (visited.size === pageSize || i === input.length - 1) {
      pages.push(page);
      // Reset
      input = input.filter((str, index) => !deleted.has(index));
      deleted.clear();
      visited.clear();
      page = [];
      i = 0;
    } else {
      i++;
    }
  }

  return pages;
};

export { displayPages };
