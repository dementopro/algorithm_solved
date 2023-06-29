

/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
const solution = read4 => {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Maximum number of characters to read
   * @return {number} The number of characters read
   */
  return (buf, n) => {
    let eof = false; // end of file flag
    let total = 0; // total bytes have read
    const buffer = Array(4); // temp buffer

    while (!eof && total < n) {
      const size = read4(buffer);

      // Check if it's the end of the file
      eof = size < 4;

      // Get the actual count
      const count = Math.min(size, n - total);

      // Copy from temp buffer to buf
      for (let i = 0; i < count; i++) {
        buf[total++] = buffer[i];
      }
    }

    return total;
  };
};

export { solution };
