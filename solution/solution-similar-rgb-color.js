

/**
 * @param {string} color
 * @return {string}
 */
const similarRGB = color => {
  return '#' + round(color.substring(1, 3)) + round(color.substring(3, 5)) + round(color.substring(5));
};

const round = comp => {
  let q = parseInt(comp, 16);

  q = Math.floor(q / 17) + (q % 17 > 8 ? 1 : 0);

  return q === 0 ? '00' : (17 * q).toString(16);
};

export { similarRGB };
