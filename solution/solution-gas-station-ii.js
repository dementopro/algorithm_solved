

/**
 * @param {number} totalDistance
 * @param {number} mpg
 * @param {number} tank
 * @param {number[]} distances
 * @return {number[]}
 */
const minVisit = (totalDistance, mpg, tank, distances) => {
  let stops = [];
  let current = mpg * tank;

  for (let i = 0; i < distances.length; i++) {
    if (distances[i] <= current && (i === distances.length - 1 || distances[i + 1] > current)) {
      stops.push(distances[i]);
      current = distances[i] + mpg * tank;

      if (current >= totalDistance) {
        return stops;
      }
    }
  }

  return [];
};

export { minVisit };
