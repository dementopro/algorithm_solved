

/**
 * @param {number[]} seats
 * @return {number}
 */
const maxDistToClosest = seats => {
  const n = seats.length;
  let max = -Infinity;

  for (let i = 0, j = 0; i < n; i = j) {
    // locate the left border of 0 [i]
    for (i = j; i < n && seats[i] === 1; i++) {}

    // locate the right border of 0 [j-1]
    for (j = i; j < n && seats[j] === 0; j++) {}

    if (i === 0 || j === n) {
      max = Math.max(max, j - i);
    } else {
      max = Math.max(max, Math.floor((j - i + 1) / 2));
    }
  }

  return max;
};

export { maxDistToClosest };
