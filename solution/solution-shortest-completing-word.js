

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  let result = null;

  // Step 2. count the letters in licensePlate
  const licenseMap = getCountMap(licensePlate);

  // Step 3. compare the letter count of each word with the license plate
  for (let word of words) {
    const wordMap = getCountMap(word);

    if (isMatch(licenseMap, wordMap) && (!result || word.length < result.length)) {
      result = word;
    }
  }

  return result;
};

const isMatch = (map1, map2) => {
  for (let c of Object.keys(map1)) {
    if (!(c in map2) || map2[c] < map1[c]) {
      return false;
    }
  }
  return true;
};

const getCountMap = str => {
  const map = {};
  for (let c of str) {
    if (/[a-zA-Z]/.test(c)) {
      const key = c.toLowerCase();
      map[key] = ~~map[key] + 1;
    }
  }
  return map;
};

export { shortestCompletingWord };
