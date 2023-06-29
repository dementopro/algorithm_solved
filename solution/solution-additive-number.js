

/**
 * @param {string} num
 * @return {boolean}
 */
const isAdditiveNumber = num => {
  if (!num || num.length < 3) {
    return false;
  }

  for (let i = 0; i < num.length - 2; i++) {
    if (num[0] === '0' && i > 0) {
      break;
    }

    const num1 = parseInt(num.substring(0, i + 1));

    for (let j = i + 1; j < num.length - 1; j++) {
      if (num[i + 1] === '0' && j > i + 1) {
        break;
      }

      const num2 = parseInt(num.substring(i + 1, j + 1));

      if (isValid(num, j + 1, num1, num2)) {
        return true;
      }
    }
  }

  return false;
};

/**
 * @param {string} num
 * @param {number} start
 * @param {number} num1
 * @param {number} num2
 * @return {boolean}
 */
const isValid = (num, start, num1, num2) => {
  if (start === num.length) {
    return true;
  }

  for (let i = start; i < num.length; i++) {
    if (num[start] === '0' && i > start) {
      break;
    }

    const num3 = parseInt(num.substring(start, i + 1));

    if (num3 === num1 + num2) {
      return isValid(num, i + 1, num2, num3);
    }
  }

  return false;
};

export { isAdditiveNumber };
