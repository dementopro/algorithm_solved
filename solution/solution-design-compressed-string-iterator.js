

class StringIterator {
  /**
   * @param {string} compressedString
   */
  constructor(compressedString) {
    this.str = compressedString;
    this.index = 0;
    this.updateCount();
  }

  updateIndex() {
    this.index++;
    while (this.index < this.str.length && (this.str[this.index] >= '0' && this.str[this.index] <= '9')) {
      this.index++;
    }
  }

  updateCount() {
    this.count = 0;

    let i = this.index + 1;
    while (i < this.str.length && this.str[i] >= '0' && this.str[i] <= '9') {
      this.count = this.count * 10 + (this.str[i++] - '0');
    }
  }

  /**
   * @return {character}
   */
  next() {
    if (!this.hasNext()) {
      return ' ';
    }

    const char = this.str[this.index];
    this.count--;

    if (this.count === 0) {
      this.updateIndex();
      this.updateCount();
    }

    return char;
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.count > 0;
  }
}

export { StringIterator };
