

/**
 * @param {character[][]} picture
 * @return {number}
 */
const findLonelyPixel = picture => {
  const m = picture.length;
  const n = picture[0].length;

  // Step 1. Count how many 'B' in each row and column
  const rowCount = Array(m).fill(0);
  const colCount = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B') {
        rowCount[i]++;
        colCount[j]++;
      }
    }
  }

  // Step 2. Count out the lonely pixel
  let total = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B' && rowCount[i] === 1 && colCount[j] === 1) {
        total++;
      }
    }
  }

  return total;
};

export { findLonelyPixel };
