

/**
 * Time complexity: O(n^2)
 *
 * @param {character[][]} picture
 * @param {number} N
 * @return {number}
 */
const findBlackPixel = (picture, N) => {
  const m = picture.length;
  const n = picture[0].length;

  // Step 1. Count how many 'B' in each row and column
  // and build the map of row key <=> pattern count when there is N 'B' in that row
  const map = {};
  const colCount = Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    let rowCount = 0;
    let rowKey = '';

    for (let j = 0; j < n; j++) {
      if (picture[i][j] === 'B') {
        rowCount++;
        colCount[j]++;
      }
      rowKey += picture[i][j];
    }

    if (rowCount === N) {
      map[rowKey] = ~~map[rowKey] + 1;
    }
  }

  // Step 2. Count out the lonely pixel
  let total = 0;

  Object.entries(map).forEach(([rowKey, count]) => {
    if (count === N) {
      // This row can potentially be our answer
      for (let j = 0; j < n; j++) {
        // Double check the column and also make sure it's value is 'B'
        if (colCount[j] === N && rowKey[j] === 'B') {
          total += N;
        }
      }
    }
  });

  return total;
};
