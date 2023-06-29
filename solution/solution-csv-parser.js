

/**
 * Parse one line of CSV
 * @param {string} text
 * @return {string[]}
 */
const parseCSVLine = text => {
  const arr = [''];
  let i = 0; // current index
  let p = ''; // previous character
  let s = true; // whether we have seen a pair of double quotes

  for (let c of text) {
    if (c === '"') {
      s = !s;
      if (p === '"') {
        arr[i] += '"'; // the previous character is also double quote
        c = ''; // reset previous character
      }
    } else if (s && c === ',') {
      c = arr[++i] = ''; // reset previous character
    } else {
      arr[i] += c;
    }

    p = c;
  }

  return arr;
};

/**
 * Parse CSV
 * @param {string[]} csvLines
 * @return {string[][]}
 */
const parseCSV = csvLines => csvLines.map(line => parseCSVLine(line));

export { parseCSV };
