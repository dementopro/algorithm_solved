

/**
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
class TicTacToe {
  /**
   * Initialize your data structure here.
   * @param {number} n
   */
  constructor(n) {
    this.size = n;
    this.rows = Array(n).fill(0);
    this.cols = Array(n).fill(0);
    this.diagonal = 0;
    this.antiDiagonal = 0;
  }

  /**
   * Player {player} makes a move at ({row}, {col}).
   *
   * @param {number} row The row of the board.
   * @param {number} col The column of the board.
   * @param {number} player The player, can be either 1 or 2.
   * @return {number} The current winning condition, can be either:
   *                  0: No one wins.
   *                  1: Player 1 wins.
   8                  2: Player 2 wins.
   */
  move(row, col, player) {
    const toAdd = player === 1 ? 1 : -1;

    this.rows[row] += toAdd;
    this.cols[col] += toAdd;

    if (row === col) {
      this.diagonal += toAdd;
    }

    if (col === this.size - 1 - row) {
      this.antiDiagonal += toAdd;
    }

    if (
      Math.abs(this.rows[row]) === this.size ||
      Math.abs(this.cols[col]) === this.size ||
      Math.abs(this.diagonal) === this.size ||
      Math.abs(this.antiDiagonal) === this.size
    ) {
      return player;
    }

    return 0;
  }
}

export { TicTacToe };
