

/**
 * Base62 Solution
 */
class TinyUrl {
  constructor() {
    this.database = {};
    this.id = 0;
  }

  idToShortUrl(n) {
    const map = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let shortUrl = '';

    while (n) {
      shortUrl = map[n % 62] + shortUrl;
      n = Math.floor(n / 62);
    }

    return shortUrl;
  }

  shortUrlToId(shortUrl) {
    let id = 0;

    for (let c of shortUrl) {
      if ('a' <= c && c <= 'z') {
        id = id * 62 + c.charCodeAt(0) - 'a'.charCodeAt(0);
      } else if ('A' <= c && c <= 'Z') {
        id = id * 62 + c.charCodeAt(0) - 'A'.charCodeAt(0) + 26;
      } else {
        id = id * 62 + c.charCodeAt(0) - '0'.charCodeAt(0) + 52;
      }
    }

    return id;
  }

  /**
   * Encodes a URL to a shortened URL.
   *
   * @param {string} longUrl
   * @return {string}
   */
  encode(longUrl) {
    const shortUrl = this.idToShortUrl(this.id);
    this.database[this.id++] = longUrl;
    return shortUrl;
  }

  /**
   * Decodes a shortened URL to its original URL.
   *
   * @param {string} shortUrl
   * @return {string}
   */
  decode(shortUrl) {
    const id = this.shortUrlToId(shortUrl);
    return this.database[id];
  }
}
