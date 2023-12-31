

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = (numerator, denominator) => {
  // zero denominator
  if (denominator === 0) {
    return 'NaN';
  }

  // zero numerator
  if (numerator === 0) {
    return '0';
  }

  const result = [];

  // determine the sign
  if ((numerator < 0) ^ (denominator < 0)) {
    result.push('-');
  }

  // remove sign of operands
  const n = Math.abs(numerator);
  const d = Math.abs(denominator);

  // append integral part
  result.push(Math.floor(n / d));

  // in case no fractional part
  if (n % d == 0) {
    return result.join('');
  }

  result.push('.');

  const map = new Map();

  // simulate the division process
  for (let r = n % d; r > 0; r %= d) {
    // meet a known remainder
    // so we reach the end of the repeating part
    if (map.has(r)) {
      result.splice(map.get(r), 0, '(');
      result.push(')');
      break;
    }

    // the remainder is first seen
    // remember the current position for it
    map.set(r, result.length);

    r *= 10;

    // append the quotient digit
    result.push(Math.floor(r / d));
  }

  return result.join('');
};

const result = fractionToDecimal(1, 333);
console.log(result);
