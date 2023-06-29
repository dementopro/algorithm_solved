

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = (A, B) => {
  const map = {};

  B.forEach((number, index) => (map[number] = index));

  return A.map(number => map[number]);
};

export { anagramMappings };
